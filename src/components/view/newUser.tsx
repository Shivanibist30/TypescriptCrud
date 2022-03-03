import React, { useState } from 'react'
import { Adduser } from '../service/api'
import {useNavigate} from 'react-router-dom'
import '../styles/newUser.scss'


const Newusers = () => {
  const initial={
    key:"",
    value:"",
  }
  const[users,setUser]=useState(initial)
  const{key,value}=users;
  const navigate=useNavigate();
  const onValueChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUser({...users,[e.target.name]:e.target.value})
  }
  const addDetail=async()=>{
    await Adduser(users);
    navigate('/')
  }
  const BackHome = () => {
    navigate(-1)
  }
  return (
    <div className='div'>
    <div className='border border-dark mx-3 my-5 px-3 py-3 styles' >
      <h3 className='text-center  my-3'>Add New User</h3>
    <label >Key</label>
    <input type="text" name='key' onChange={(e)=>onValueChange(e)} value={key} className="form-control" aria-describedby="passwordHelpBlock"/>
    <label  >Value</label>
    <input type="text" name='value' onChange={(e)=>onValueChange(e)} value={value} className="form-control" aria-describedby="passwordHelpBlock"/>
    <button className='my-2 btn btn-sm btn-outline-primary' onClick={()=>addDetail()}>Add User</button> 
    <button className="btn btn-sm btn-outline-danger  mx-3" onClick={() => BackHome()}>Cancel</button>
    </div>
    </div>
  )
}

export default Newusers
