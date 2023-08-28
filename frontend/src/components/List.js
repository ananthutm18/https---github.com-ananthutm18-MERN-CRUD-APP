import React from 'react'
import {BsTrash} from "react-icons/bs"
import {BiEditAlt} from "react-icons/bi" 
import axios from 'axios'
import { baseURL } from './utils/constatn'



const List = ({id, task, setUpdate, updateMode}) => {

const remove=()=>{
  axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
    console.log(res)
    setUpdate((prevState)=>!prevState);
  });

};



  return (
   <li className='list'>
{task}
<div className='icone-set'>
  <BiEditAlt className='icone' onClick={()=>updateMode(id, task)}/> &nbsp; &nbsp;
  <BsTrash className='icone' onClick={remove} />
</div>




   </li>

  )
}

export default List