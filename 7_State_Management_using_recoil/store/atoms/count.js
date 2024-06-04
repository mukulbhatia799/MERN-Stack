import { atom, selector } from 'recoil'

// keys should be diff for all atoms. might cause conflicts.
export const countAtom = atom({
    key: "countAtom",
    default: 0
});
// get rid of all useState and useContext from App.jsx.



export const oddSelector = selector({
    key: "oddSelector",
    get: (props) => {
        const count = props.get(countAtom);
        return count % 2;
    }
})
// As oddSelector depends on countAtom, so when it's value changes, the oddSelector will get re-run and rendered. Selectors can depend on other atoms as well as selectors.
