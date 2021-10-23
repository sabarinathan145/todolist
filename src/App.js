import React,{ useState} from 'react';
import trashIcon from './trash.svg';


function App() {
  const [taskInput, updateTaskInput] = useState("");
  const [toDolist, updateToDoList] = useState([]);
 
  const inputKeyDown = (event) =>{
    if (event.keyCode===13)
    addNote();
  }
  const addNote = () =>{
    toDolist.push({description: taskInput, isComplete:false})
    updateToDoList(toDolist)
    updateTaskInput("")
  }
  
 
  const deleteTask = (index)=>{
  const newList = toDolist.filter((item,i)=> i!==index);
  updateToDoList(newList)
  }
  
  const mark = (index)=>{
    const list = [...toDolist];
    list[index].isComplete =  !list[index].isComplete;
    updateToDoList(list)
    }

  return (
    <div className="app-background">
    <p className=" heading-text"> To do List</p>
    <div className="task-container">
    <div>
    <input className="text-input" value={taskInput} onKeyDown={inputKeyDown} onChange={(event)=>updateTaskInput(event.target.value)} /> 
    <button className="add-button" onClick={addNote}> ADD </button>
    </div>
   {toDolist?.length? toDolist.map((toDoObject,index)=>
   
     <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask} mark={mark}/>): <p className="no-item-text">📌 No Task added</p>} 
    </div>
    <p className="footer-text">Sabar_I ❤️</p>
    </div>
  );
}


function ListItem(props){
  return(
    <div className="list-item row jc-space-between">
      <span className={props.itemData.isComplete?"task-complete":""} 
         onClick={() => props.mark(props.index)}>{props.itemData.isComplete ? `✅ ` : ''}&nbsp;{props.itemData?.description}</span>
     <img src={trashIcon} className="delete-icon" onClick={()=> props.deleteTask(props.index)}/>
    </div>
  )
  }
  

export default App;
