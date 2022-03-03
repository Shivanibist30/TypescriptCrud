import axios from 'axios';
import { userProp } from './userProptype';


const url = 'http://localhost:3003/users';



export const getUsers = async () => {
    return await axios.get(url);
}

export const deleteUser = async (user: userProp) => {
    return await axios.delete(`${url}/${user.id}`)
}

export const Adduser = async (user: userProp) => {
    return await axios.post(url, user);
}


export const Edit=async(user:userProp)=>{
    return ( await axios.get(`${url}/${user.id}`)
    )
}

export const userUpdate = async (user: userProp) => {
    return await axios.put(`${url}/${user.id}`, user)
}