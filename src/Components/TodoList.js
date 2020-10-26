import React from 'react';
import '../Styles/TodoList.css';
import { MdDelete } from 'react-icons/md';

function Todos(props) {
    return (
        <>
            <li>
                <div className="list">
                    <div><input type="checkbox" id={props.index} onChange={() => { props.statusTodo(props.todos.id) }} checked={props.todos.status} /></div>
                    <div className="text"><p>{props.todos.todoText}</p></div>
                    <span className={props.todos.status ? "greendot" : "reddot"}></span>
                    <span className="delete"><MdDelete size="25px" color="red" className="deletebutton" onClick={()=>{props.ondelete(props.todos.id)}}/></span>
                </div>
                <div className="hr-element"><hr /></div>
            </li>
        </>
    )
}

export default Todos;
