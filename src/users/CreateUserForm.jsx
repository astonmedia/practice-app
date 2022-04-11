import styles from "./CreateUserForm.module.css"
import Card from "../ui/Card"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import { useState, useRef } from "react"

const CreateUserForm = (props) => {
  // const [username, setUsername] = useState("")
  // const [age, setAge] = useState("")
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const clickHandler = (e) => {
    e.preventDefault()
    const username = nameInputRef.current.value
    const age = ageInputRef.current.value

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
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
    setError("")
    setIsError(false)
  }

  const errorHandler = () => {
    setError("")
    setIsError(false)
  }
  return (
    <>
      {isError && (
        <Modal click={errorHandler} title={"Error Message"} message={error} />
      )}
      <Card>
        <form>
          <div className={styles.input}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              //onChange={(e) => setUsername(e.target.value)}
              ref={nameInputRef}
            />
            <label htmlFor='age'>Age (Years)</label>
            <input
              type='number'
              id='age'
              //onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </div>
          <Button type={"submit"} name={"Add User"} click={clickHandler} />
        </form>
      </Card>
    </>
  )
}

export default CreateUserForm
