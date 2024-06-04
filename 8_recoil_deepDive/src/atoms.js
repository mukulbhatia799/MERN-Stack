import { atom, selector } from 'recoil' 

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 104
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 14
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 74
})


export const totalCountSelector = selector({
    key: "totalCountSelector",
    get: ({get}) => {
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);
        const notificationsCount = get(notificationsAtom);
        return jobsCount + messagingCount + notificationsCount;
    }
})