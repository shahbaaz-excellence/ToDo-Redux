import React, { useState, useEffect } from 'react'
import { MdAddCircleOutline } from 'react-icons/md';
import '../Styles/Todo.css';
import Form from './Form';
import Todos from './TodoList';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from '../Redux/action/index';


function Todo() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const storedTodoList = JSON.parse(localStorage.getItem('storetodo')  || []) 
    //     console.log(storedTodoList)
    //     setTodoList(storedTodoList);
    // }, []);


    //  add todo

    const todostate = useSelector((state) => state.todos);
    const AddTodo = (todoInput) => {
        dispatch(addTodo(todoInput))
        // localStorage.setItem('storetodo', JSON.stringify(newTodoList));

    }

    // delete todo

    const DeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId))
        // localStorage.setItem('storetodo', JSON.stringify(updatedTodo));
    }

    //  todo status change

    const todoStatus = (todoId) => {
        dispatch(toggleTodo(todoId))
        // localStorage.setItem('storetodo', JSON.stringify(newTodos));
    }

    return (
        <div className="maindiv">
            <div className="header">
                <h1>Today</h1>
                <span className="addbutton"><MdAddCircleOutline className="blue" size="25px" onClick={handleShow} /></span>
            </div>
            <Form
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                addTodo={AddTodo}
            />
            <div className="content">
                <div>
                    <ul>
                        {todostate.todoDataList.map((todo, id) => {
                            return <Todos
                                key={id}
                                index={id}
                                todos={todo}
                                ondelete={DeleteTodo}
                                statusTodo={todoStatus}
                            />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;
