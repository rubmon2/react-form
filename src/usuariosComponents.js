import React from 'react'
import { UseFetch } from './hooks/usefetch'
export const UsuariosComponents = () => {

const{data,errors,isLoading}=UseFetch("https://jsonplaceholder.typicode.com/users")


  return (
<>
   {isLoading ? <h4>Cargando, espere por favor</h4> 
   : errors ?<h4>Ocurrio un error{errors}</h4> 
   : <table className="table">
  
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    {data.map(user=> {return (
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>@{user.website}</td>
    </tr>)})}
    
  </tbody>
</table>    }
</>
  )
}
