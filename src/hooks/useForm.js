import React from 'react'
import { useState } from 'react'
export const useForm = (varInicial={}) => {


//hooks
  const [formState, setFormState]=useState(varInicial)

//onchange
const onInputChange =({target})=>{
const{name,value}=target
setFormState({  
  ...formState, 
  [name]:value
})}


  return {
formState,
...formState, 
onInputChange
  }
}
