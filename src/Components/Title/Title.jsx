import styles from "./Title.module.scss";

export default function Title({title, txt, align, padding}) {
  return (
    <>
      <div className={`${styles['title']} ${align} ${padding}`}>
        <h2>{title}</h2>
        <p>{txt}</p>
      </div>
    </>
  )
}
