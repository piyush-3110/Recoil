import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  default: 0,
  key: "jobsAtom",
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const networkAtomCount = get(networkAtom);
    return (
      jobsAtomCount +
      messagingAtomCount +
      notificationsAtomCount +
      networkAtomCount
    );
  },
});
