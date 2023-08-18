import { SignInIcon } from "@/components/icons/icon";
import styles from "./signin.module.scss";
import { login } from "@/components/firebase/auth";

export default function SigninComponent() {
  return (
    <div className={styles.signin} onClick={login}>
      <SignInIcon className={styles.icon} />
      <h1 className={styles.text}>Sign in with Google</h1>
    </div>
  );
}
