import React, { useEffect, useState } from 'react'
import { getUsers,deleteUser } from '../service/api'
import { Link } from 'react-router-dom'
import { userProp } from '../service/userProptype'
import './allUsers.scss'

const Allusers = () => {

const [users,setUsers]=useState<userProp[]>([]);
useEffect(()=>
  {
  getAllUsers();
  },[])

const getAllUsers=async()=>{
  const response=await getUsers();
 
  setUsers(response.data);
}

const deleteUserData=async(user:userProp)=>{
  await deleteUser(user);
  getAllUsers();

}

  return (
    <div className="div" >
      <h3 className="text-center boldtext my-3">All users</h3>
   <table className=" table tabstyles table-bordered my-3 table-primary " >
  <thead className='table-dark'>
    <tr>
      <th scope="col">Key</th>
      <th scope="col" >Value</th>
      <th>Actions</th> 
    </tr>
  </thead>
  <tbody>
    {
      users.map((user)=>{
        return(<tr key={user.id}>
          <th scope="row">{user.key}</th>
          <td>{user.value}</td>
          {/* <td> */}
          <td><Link to={`editusers/${user.id}`}><button className='btn btn-sm btn-outline-primary' >View</button></Link> 
          <button className='btn btn-sm btn-outline-danger mx-3' onClick={()=>{deleteUserData(user)}}>Delete</button></td> 
          </tr>)
      })
    }
  </tbody>
</table>
  </div>
  )
}

export default Allusers