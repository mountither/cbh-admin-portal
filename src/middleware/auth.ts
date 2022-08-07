import {
  getIdTokenResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { Readable, readable } from "svelte/store";

import {currentUser, User} from '../stores/user' 
import { auth } from "../../firebase/client";


// // construction function. need to call it after we
// // initialize our firebase app
// export const initAuth = () => {
//   const login = async(email: string, password: string) =>
//     await signInWithEmailAndPassword(auth, email, password);

//   const logout = async () => await signOut(auth);

//   // wrap Firebase user in a Svelte readable store
//   const user: Readable<User> = readable(null, (set) => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const tokenRes = await getIdTokenResult(user);

//         console.log("TOKEN ", tokenRes.claims);

//         const fetchedUser = userMapper(tokenRes);

//         set(fetchedUser);

        
//       } else {
//         set(null);
//       }
//     });

//     return unsubscribe;
//   });

//   return {
//     user,
//     login,
//     logout,
//   };
// };
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const tokenRes = await getIdTokenResult(user);

    const {user_id, name, email, role} = tokenRes.claims;

    currentUser.set({id: user_id, name, email, role})
    
  } else {
    currentUser.set({id: undefined})
  }
});
