import styles from "./UserList.module.css"
import Card from "../ui/Card"

const UserList = (props) => {
  return (
    <Card>
      <p>
        {props.username} | {props.age} years old
      </p>
    </Card>
  )
}

export default UserList
