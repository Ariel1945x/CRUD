import './App.css'
import UsersList from './Components/UsersList'
import UsersForm from './Components/UsersForm'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState(null)
  const [form, setFrom] = useState(false)

  const getAll = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then(resp => {
        setUsers(resp.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getAll()
  }, [])

  const addUser = user => {
    axios 
    .post(`https://users-crud.academlo.tech/users/`, user)
    .then(() => {
      getAll()
    })
    .catch(error => console.log(error))
  }

  const deleteUser = user => {
    axios 
      .delete(`https://users-crud.academlo.tech/users/${user}/`)
      .then(() => {
        getAll()
      })
      .catch(error => console.log(error))
  }

  const upDateUser = actualUser => {
    setNewUser(actualUser)
  }

  const editUser = user => {
    axios
      .put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
      .then(() => {
        getAll()
      })
      .catch(error => console.log(error))
  }

  const [pru, setPru] = useState("")

  const prueba = e => {
    setPru(e.target.value)
  }

  const borrar = () => {
    setPru("")
  }


  return (
    <>

    <header>
      <h1>Usuarios</h1>

      <button onClick={() => {setFrom(!form)}} className='h-btn'>
        <svg className='h-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
        <p className='h-p'> Crear un nuevo usuarios</p>
      </button>
    </header>

    {
    form 
    && 
    <UsersForm
      addUser={addUser}
      newUser={newUser}
      editUser={editUser}
      visual={form}
      />
    }

      <UsersList
      users={users}
      upDateUser={upDateUser}
      deleteUser={deleteUser}
      />
    </>
  )
}

export default App
