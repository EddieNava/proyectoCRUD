import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'
import Form from './components/Form'
import { useForm } from 'react-hook-form'


const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()
  const [buttonPopup, setButtonPopup] = useState(false)

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: ""
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div className='header'>
     
        <button className='user-btn' onClick={showForm}>{isShowForm ? 'Hide Form' : '+ Create a new User'}</button>
      </div>
      <div className='title'>
             
      <h1> Usuarios </h1>
      </div>
     
      <div className='Appcontainer'>
       <div>
        {
          isShowForm && 
          <Form 
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
          />
        }
      </div>
      {
        users?.map(user => (
          <CardUser
            key={user.id}
            user={user}
            URL={URL}
            getAllUsers={getAllUsers}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
          />
        ))
      }
     </div>
    </div>
  )
}

export default App

