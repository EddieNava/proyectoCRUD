import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const CardUser = ({user, getAllUsers, URL, setObjectUpdate, setIsShowForm, reset}) => {
 

const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setShowMes(true)
        let userdel=id
      })
      .catch(err => console.log(err))
  }

  const updateUser = () => {
    setIsShowForm(true)

    const obj = {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      birthday: user.birthday
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <article className='card'>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
      
        <li><b> Id: # </b>{user.id}</li>
        <li><b> Correo: </b>{user.email}</li>
        <li><b> Contraseña: </b>{user.password}</li>
        <li><b> Nombre: </b>{user.first_name}</li>
        <li><b> Apellido: </b>{user.last_name}</li>
        <li><b> Cumpleaños: </b>{user.birthday}</li>
      </ul>
      <button style={{marginRight:10, marginTop:10, marginLeft:90}} onClick={() => deleteUser(user.id) }> <i className="fa-solid fa-trash" style={{color: "rgba(52,65,250,1)"}} ></i> </button>
      <button onClick={updateUser}><i className="fa-solid fa-pen" style={{color: "rgba(52,65,250,1)"}} ></i></button>
     
    </article>
  )
}

export default CardUser