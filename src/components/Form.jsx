import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({createUser, updateUserById, objectUpdate, handleSubmit, reset, register}) => {

  const defaultValuesForm = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email"><i className="fa-solid fa-envelope"></i> Email: </label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password"><i className="fa-solid fa-key"></i> Password: </label>
          <input type="text" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="first_name"><i className="fa-solid fa-file-pen"></i> First Name: </label>
          <input type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
          <label htmlFor="last_name"><i className="fa-solid fa-file-pen"></i> Last Name: </label>
          <input type="text" id='last_name' {...register('last_name')} />
        </div>
        <div>
          <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> Birthday: </label>
          <input type="date" id='birthday' {...register('birthday')} />
        </div>
        <button className='botonsave'>Save</button>
      </form>
  )
}

export default Form