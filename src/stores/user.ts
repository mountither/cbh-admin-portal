import { Writable, writable } from "svelte/store";


export type User = {
  id: string | object;
  name?: string | object;
  email?: string | object;
  role?: string | object;
};


const userData : Writable<User | undefined>  = writable(undefined);

const setUser = (user: User) => {
  userData.set(user);
};

const removeUser = () => {
  userData.set(undefined);
};

const currentUser = {
  subscribe: userData.subscribe,
  set: setUser,
  remove: removeUser,
};

export { currentUser };
