import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUser(data))
  }
  ,[])
  return (
    <>

      <h1>User Management</h1>
      <h3>toal user: {user.length}</h3>
      <div>
        {

        }
      </div>
    </>
  )
}

export default App
