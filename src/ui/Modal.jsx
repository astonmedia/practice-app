import styles from "./Modal.module.css"
import Card from "./Card"
import Button from "./Button"
import ReactDOM from "react-dom"

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.click} />
}

const ModalOverlay = (props) => {
  return (
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
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop click={props.click} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          click={props.click}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  )
}

export default Modal
