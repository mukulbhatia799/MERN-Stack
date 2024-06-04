import { atom } from 'recoil'

// keys should be diff for all atoms. might cause conflicts.
export const countAtom = atom({
    key: "countAtom",
    default: 0
});

// get rid of all useState and useContext from App.jsx.