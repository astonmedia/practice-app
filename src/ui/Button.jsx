import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.click}
      type={props.type || "button"}
    >
      {props.name}
    </button>
  )
}

export default Button
