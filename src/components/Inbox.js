import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  const titleInput = useRef(null);
  const dateInput = useRef(null);
  const addATask = (e)=>{
    if(!titleInput.current.value) return;
    let itemObj = {
      title: titleInput.current.value,
      date: new Date (dateInput.current.value),
    }
    props.append(itemObj);
    setNewTask(false);
    console.log(props.list);
  }
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>setNewTask(true)} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box" onSubmit={(e)=>e.preventDefault()}>
          <input type="text" id="title" ref={titleInput}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addATask}>
              Add Task
            </button>
            <button className="new" onClick={()=>setNewTask(false)}>
              Cancel
            </button>
            <input type="date" ref={dateInput} defaultValue="2022-09-27" id="date" ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date.toLocaleDateString()});
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
