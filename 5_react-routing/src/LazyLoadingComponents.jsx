// It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.

// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { MainPage } from '../components/MainPage'
// import { SignupPage } from '../components/SignupPage'

import { Suspense, lazy } from 'react';       // react exports the lazy function.   
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import { MainPage } from '../components/MainPage';
// import { SignupPage } from '../components/SignupPage';
// let's import MainPage and SignupPage lazily.
const SignupPage = lazy(() => import('../components/SignupPage'))
const MainPage = lazy(() => import('../components/MainPage'))

function LazyLoadingComponents() {
    return (
        <div>
            <BrowserRouter>
                <TopBarApp />
                <Routes>
                    {/* <Route path="/" element={<MainPage />} />
                    <Route path="/Signup" element={<SignupPage />} /> */}
                    {/* Here, MainPage and SignupPage is not exactly n aasynchronous but when changing the one route to another, it may take some seconds to render(also depends on the internet speed.). So, we can {use React suspense} to render a lazy loaded React component or {render a fallback UI while fetching data from an API}. The Suspense component will render a fallback UI while its children are loading. So, let's render it with using Suspense api. */}
                    <Route path='/' element={
                        <Suspense fallback={"loading...MainPage"}>
                            <MainPage />
                        </Suspense>}
                    ></Route>
                    <Route path="/Signup" element={<Suspense fallback={"loading...Signup Page"}> <SignupPage /> </Suspense>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

function TopBarApp() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                // window.location.href = "/Signup"            // reload happens using location.href, but using useNavigate the reload will not happen, it simply changes the page using history api.
                navigate("/Signup");
            }}>Signup Page</button>
            <button onClick={() => {
                // window.location.href = "/"
                navigate("/");
            }}>Landing Page</button>
        </div>
    )
}

export default LazyLoadingComponents;