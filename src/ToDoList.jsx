import { useState } from "react";

function ToDoList(){

    const [lists,setList] = useState(["hello"]);

    function handleClick(){
        const newTask = document.getElementById("enterValue").value;
        if(newTask.trim() !== ""){
        setList(n =>[...n,newTask]);
        document.getElementById("enterValue").value ="";
        }
    }

    function handleRemove(index){
       const updatedTasks = lists.filter((__,i)=> i !== index);
       setList(updatedTasks);
    }

    function handleUp(index){
        if(index >0){
            const updatedTasks = [...lists];
            [updatedTasks[index],updatedTasks[index - 1]]=[updatedTasks[index-1],updatedTasks[index]];
            setList(updatedTasks);
        }
    }

    function handleDown(index){

         if(index < lists.length-1){
            const updatedTasks = [...lists];
            [updatedTasks[index],updatedTasks[index + 1]]=[updatedTasks[index+1],updatedTasks[index]];
            setList(updatedTasks);
        }

    }
    return(
        <div className="todoContainer">

        <h1 className="main">To Do List</h1> 
        <h5 className="you">You Can </h5> 
        <input type="text" id="enterValue" placeholder="Enter the task to be done"></input>

        <ul className="taskList">
            {lists.map((list,index)=>
            <li className="list" key={index} >{list}<button onClick={()=>handleRemove(index)} className="but" >Remove</button>
            <button className="but"onClick={()=>handleUp(index)}>Up</button>
            <button className="but"onClick={()=>handleDown(index)}>Down</button></li>)}
        </ul>
        <button className="addTask" onClick={handleClick}>Add Task</button>
                </div>

        
    );
}

export default ToDoList