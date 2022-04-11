import styles from "./Users.module.css"
import CreateUserForm from "./CreateUserForm"
import UserList from "./UserList"
import { useState } from "react"
import { userData } from "../data/users"

const Users = () => {
  const [users, setUsers] = useState(userData)
  // Add User to state
  const addUser = (newUser) => {
    setUsers((prevState) => [newUser, ...prevState])
  }
  return (
    <div className={styles.users}>
      <CreateUserForm addUser={addUser} />
      {Object.entries(users).map(([id, value]) => (
        <div className={styles.userList}>
          <UserList key={id} username={value.username} age={value.age} />
        </div>
      ))}
    </div>
  )
}

export default Users
