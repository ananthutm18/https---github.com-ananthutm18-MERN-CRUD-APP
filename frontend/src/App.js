import React, { useEffect, useState } from 'react'
import List from './components/List'
import './App.css';
import axios from 'axios'
import { baseURL } from './components/utils/constatn'
const App = () => {

const [input,setInput] = useState("")
const [tasks,setTask] = useState([])
const [update,setUpdate]=useState(false)
const [updateId,setUpdateId]=useState(null)


useEffect(()=>{
axios.get(`${baseURL}/get`).then((res)=>{
  console.log(res.data)
  setTask(res.data)

})
}, [update])

const addTask=()=>{ 
  axios.post(`${baseURL}/save`,{task:input}).then((res)=>
  {
    console.log(res.data);
    setInput("")
    setUpdate((prevState)=>!prevState);

  })
}










const updateMode=(id, text)=>{

  console.log(text);
  setInput(text);
  setUpdateId(id);
  //updateId=id
  console.log(updateId);
  console.log(input)

}



const updateTask=()=>{
  axios.put(`${baseURL}/update/${updateId}`, {task: input}).then((res)=>{
    console.log("ok process")
    console.log(res.data)
  setUpdate((prevState)=>!prevState)
  setUpdateId(null)
  //updateId=null;
  setInput("")
})


}

  return <main>








<div className='container'>




    
<h1 className='title'>ACTIVITY TRACKER APPLCATION</h1>
<div className='inner'>
<input type='text' className='inputtag' value={input} onChange={(e)=>setInput(e.target.value)}/>



<button type='submit' onClick={updateId? updateTask : addTask}> {updateId? "update Task" : "ADD TASK"}</button>
<ul> 

  {tasks.map((task)=>( <List key={task._id} id={task._id} task={task.task}  setUpdate={setUpdate} updateMode={updateMode} />))

  }
  
  </ul>
  </div>
</div>
  </main>
}

export default App