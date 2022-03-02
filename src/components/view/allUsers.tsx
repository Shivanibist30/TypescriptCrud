import React, { useEffect, useState } from 'react'
import { getUsers,deleteUser } from '../service/api'
import { Link } from 'react-router-dom'
import { userProp } from '../service/userProptype'

const Allusers = () => {
 const styles={
    width:'40%',
    height:'50%',
    margin:'5px',
  }
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
    <div className="container " style={styles}>
      <h3 className="text-center">All users</h3>
   <table className=" table table-bordered my-4 table-primary" >
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