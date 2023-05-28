import styles from "./Download.module.scss";

export default function Download() {
  return (
    <>
      <div className={`${styles['btns']} d-flex gap-3 align-items-center flex-lg-row flex-md-row flex-sm-column flex-column my-3`}>
        <a href="#" className={`${styles['btnMain']} btn rounded-pill p-3 px-4`}>Download for iOS</a>
        <a href="#" className={`${styles['btnSec']} btn rounded-pill p-3 px-4`}>Download for Mac</a>
      </div>
    </>
  )
}
