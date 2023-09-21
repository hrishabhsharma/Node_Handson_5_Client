import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Add } from './UserSlice'
import "./User.css"
// import { io } from 'socket.io-client'
// const socket = io("http://localhost:8000/")

const LogPage = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [Username,setUsername] = useState("")
    const SwitchToPage =(e)=>{
      e.preventDefault()
      dispatch(Add(Username))
      // socket.emit("Username",Username)
      navigator('/Home')
    }
  return (
    <div className='Body'>
        <h1>LogIn to Hrep Chatting App</h1>
        <form onSubmit={SwitchToPage}>
            <input type='text' name='Name' onChange={(e)=>setUsername(e.target.value)}/><br/>
            <label>Please Enter Your Name</label><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default LogPage