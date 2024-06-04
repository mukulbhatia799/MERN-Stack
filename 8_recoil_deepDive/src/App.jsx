
/*
Suppose, we have linkedin top bar in a states like networkCount, messagingCount, notificationCount etc. So, one way is to use useState() and another is using recoil state management library.
*/


import { jobsAtom, messagingAtom, notificationsAtom, totalCountSelector } from "./atoms"
import { useRecoilValue, useSetRecoilState, useRecoilState, RecoilRoot } from "recoil"

function App() {
    return <RecoilRoot>
        <MainApp />
    </RecoilRoot>
}

function MainApp() {
    const jobsCount = useRecoilValue(jobsAtom);
    const messagingCount = useRecoilValue(messagingAtom);
    const notificationsCount = useRecoilValue(notificationsAtom);

    // const totalCount = useMemo(() => {
    //     return jobsCount+messagingCount+notificationsCount;
    // }, [jobsCount, messagingCount,notificationsCount])
    
    // we have used useMemo so that if any of the dependency values changes, then only the computation inside useMemo() happen. React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render
    
    // another way of useMemo() is to use selector.
    const totalCount = useRecoilValue(totalCountSelector);

    return <div>
        <button>Home</button>
        <button>Jobs ({jobsCount > 99 ? "99+":jobsCount})</button>
        <button>Messaging ({messagingCount > 99 ? "99+":messagingCount})</button>
        <button>Notifications ({notificationsCount > 99 ? "99+":notificationsCount})</button>

        <button>Me ({totalCount})</button>
    </div>
}




export default App