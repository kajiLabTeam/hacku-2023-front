import { useEffect, useState } from "react";
import { app } from "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { userState } from "@/store/state";
import { cloneObjec } from "../util/util";

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const useIsSigned = (): boolean | undefined => {
  const [isSigned, setIsSigned] = useState<boolean | undefined>();
  const setUserState = useSetRecoilState(userState);

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const newUser = user ? cloneObjec<User>(user) : null;
        setUserState(newUser);
        setIsSigned(true);
      } else {
        setIsSigned(false);
      }
    });
  }, [setUserState]);

  return isSigned;
};
