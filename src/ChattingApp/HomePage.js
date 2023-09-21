import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./User.css"
import {io} from 'socket.io-client'
const socket = io("https://hrishabh-hrep-chatting.onrender.com/")

const HomePage = () => {
    const [Outgoing,setOutgoing] = useState([])
    const [Incoming,setIncoming] = useState([])
    const [Message,setMessage] = useState("") 
    const User = useSelector((state)=>state.Username)
    const nav = useNavigate()
    useEffect(()=>{
        socket.emit("Username",User)
        socket.on("TotalMembers",(data)=>{
            console.log(data)
        })   
        socket.on("SENDTOUSER",(data)=>{
            setIncoming([...Incoming,data])
            console.log(data)
        })   
    },[User,Incoming])
    const sendmessage = ()=>{
        setOutgoing([...Outgoing,Message])
        socket.emit("VERIFY",Message)
    }
    const handlemessage = (e)=>{
        setMessage(e.target.value)
    }
  return (
    <div className='Body'>
        <fieldset>
            <legend>{User}</legend>
            <div className='chattingarea'>
                <div>
                    {
                        Incoming && Incoming.map((item,index)=>
                        <p key={index}>{item}</p>
                        )
                    }
                </div>
                <div>
                    {
                        Outgoing && Outgoing.map((item,index)=>
                        <p key={index}>{item}</p>
                        )
                    } 
                </div>
            </div>
        </fieldset>
        <input type='text' onChange={handlemessage}/> <br/>
        <button onClick={sendmessage}>Submit</button><br/>
        <button onClick={()=>nav("/")}>Go to Login</button>
    </div>
  )
}

export default HomePage