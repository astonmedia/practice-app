import styles from "./CreateUserForm.module.css"
import Card from "../ui/Card"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import { useState } from "react"

const CreateUserForm = (props) => {
  const [username, setUsername] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()
    if (username.trim().length <= 3) {
      setError("Please enter a username of more than 3 characters")
      setIsError(true)
      return
    }
    if (+age < 1) {
      setError("Please enter an age")
      setIsError(true)
      return
    }
    props.addUser({ username, age })
    setUsername("")
    setAge("")
  }

  const errorHandler = () => {
    setIsError(false)
  }
  return (
    <div>
      {isError && (
        <Modal click={errorHandler} title={"Error Message"} message={error} />
      )}
      <Card>
        <form>
          <div className={styles.input}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='age'>Age (Years)</label>
            <input
              type='text'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <Button type={"submit"} name={"Add User"} click={clickHandler} />
        </form>
      </Card>
    </div>
  )
}

export default CreateUserForm
