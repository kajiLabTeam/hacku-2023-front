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
import { fetcAddhUser } from "../api/user";

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
  const setUserToken = useSetRecoilState(userState);

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          const token = await user.getIdToken();
          setUserToken(token);
          setIsSigned(true);
          void fetcAddhUser(token);
        })();
      } else {
        setIsSigned(false);
      }
    });
  }, [setUserToken, setIsSigned]);

  return isSigned;
};
