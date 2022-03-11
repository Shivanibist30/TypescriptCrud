import React, { useEffect, useState } from 'react'
import { userUpdate } from '../service/api'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios';
import './editUser.scss'

const Edituser = () => {
  const initial = {
    key: "",
    value: "",
  }
  const [users, setUser] = useState(initial)
  const { key, value } = users;
  const { id } = useParams()
  //console.log("id",`http://localhost:3003/users/${id}`)
  const navigate = useNavigate();

  const loadUserdata = async () => {
    // const response=await Edit(user)
    const response = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(response.data)
  }

  useEffect(() => { loadUserdata() }, []);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...users, [e.target.name]: e.target.value })
  }

  const addDetail = async () => {
    await userUpdate(users);
    navigate('/')
  }

  const [Editclick, visibility] = useState(false)

  const OnVisibility = () => {
    visibility(!Editclick)
  }

  const BackHome = () => {
    navigate(-1)
  }

  return (
    <div className=" div my-5 py-2" >
      {Editclick ?
        <div className='mainDetails'>
          <div className='editDiv border border-dark my-3 py-3 px-2 ' >
            <h3 className='text-center ' >Edit user Details</h3>
            <label >Key</label>
            <input type="text" name='key' onChange={(e) => onValueChange(e)} value={key} className="form-control" aria-describedby="passwordHelpBlock" />
            <label  >Value</label>
            <input type="text" name='value' onChange={(e) => onValueChange(e)} value={value} className="form-control mb-3" aria-describedby="passwordHelpBlock" />
          </div>
          <button className=' btn btn-sm btn-outline-success' name='update' onClick={() => addDetail()}>Update</button>
          <button className="btn btn-sm btn-outline-danger  mx-3" onClick={() => BackHome()}>Cancel</button>
        </div>
        :
        <div className='border editDiv border-dark  my-2 py-3 px-3' >
          <h3 className='text-center '>User Data</h3>
          <h4 className="my-2">Key : {key}</h4><br />
          <h4 >Value: {value}</h4><br />
        </div>
      }

      {Editclick ? "" :
        <div className='px-2'>
          
          <button className='btn btn-sm btn-outline-primary' onClick={() => { OnVisibility() }}>Edit</button>
          <button className="btn btn-sm btn-outline-danger cancelButton  mx-2" onClick={() => BackHome()}>Cancel</button>
        </div>
      }
    </div>
  )

}

export default Edituser
