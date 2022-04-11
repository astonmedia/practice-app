import styles from "./Modal.module.css"
import Card from "./Card"
import Button from "./Button"

const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.click}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button click={props.click} name={"Close"} />
        </footer>
      </Card>
    </div>
  )
}

export default Modal
