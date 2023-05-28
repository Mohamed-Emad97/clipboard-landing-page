import logo from "../../assets/images/logo.svg";
import {Download} from "../index";
import styles from "./Landing.module.scss";

export default function Landing() {
  return (
    <>
      <section id={styles['landing']}>
        <div className={`${styles['center']} text-center h-100`}>
          <div className="img">
            <img src={logo} alt="" className="w-100" />
          </div>
          <div className={styles['title']}>
            <h1>A history of everything you copy</h1>
            <p className="mt-4">
              Clipboard allows you to track and organize everything you copy. Instantly  <br/>
              access your clipboard on all your devices.
            </p>
          </div>
          <Download/>
        </div>
      </section>
    </>
  )
}
