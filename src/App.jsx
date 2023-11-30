import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }
  ,[]);

  const handlesubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = {name, email};
      console.log(user);

      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      })
  }


  return (
    
    <>

      <h1>User Management</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <h3>toal user: {users.length}</h3>
      <div>
        {
          users.map(u => <p key={u.id}>{u.name}: {u.email}</p>)
        }
      </div>
    </>
  )
}

export default App
