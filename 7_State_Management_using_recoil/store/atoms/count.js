import { atom, selector } from 'recoil'

// keys should be diff for all atoms. might cause conflicts.
export const countAtom = atom({
    key: "countAtom",
    default: 0
});
// get rid of all useState and useContext from App.jsx.


// This is a selector.
export const oddSelector = selector({
    key: "oddSelector",
    get: (props) => {                           // this will get the value for the oddSelector.
        const count = props.get(countAtom);     // As oddSelector depends on countAtom, so when it's value changes, the oddSelector will get re-run and rendered. Selectors can depend on other atoms as well as selectors.
        return count % 2;
    }
})


// export const filteredData = selector({
//     key: "filteredData",
//     get: (props) => {
//         const todos = props.get(todosAtom);
//         const filter = props.get(filterAtom);
//         return todos.map(todo => (todo.title.include(filter) && todo.description.include(filter))); 
//     }
// })