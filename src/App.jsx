import './App.css'
import {useUsers} from "./hooks/useUsers.js";
import {useState} from "react";
import {useUserInfo} from "./hooks/useUserInfo.js";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [counter, setCounter] = useState(0)
  const { users} = useUsers();

  let userInfo = null;

  if (selectedUserId) {
    userInfo = useUserInfo(selectedUserId)
  }

  const incrementCounter = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
  }

  return (
    <div>
      <div>
        { userInfo ? (
            <div>

              <h1>User: { userInfo.name }</h1>
              <p>age: { userInfo.age }</p>
              <p>email: { userInfo.email }</p>
            </div>
        ) : null }
      </div>
      <div>
        {
          users.map((user) => (
              <div onClick={() => setSelectedUserId(user.id)}>
                {user.name}
              </div>
          ))
        }
      </div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>
        Increment
      </button>
      <button onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  )
}

export default App
