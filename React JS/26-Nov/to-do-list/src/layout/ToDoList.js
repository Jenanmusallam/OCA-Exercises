import React, { useState, useEffect } from 'react'
import Form from '../Commponant/ToDoList/Form'
import TodoLists from '../Commponant/ToDoList/ToDoLists'
import '../Todolist.css'

function ToDo() {

    //State stiff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Run
    useEffect(() => {
        getLocalTodos();
    }, []);

    //Use Effect
    useEffect(() => {
        filterHandler();
        saveLocalTodoes();

    }, [todos, status]);

    //function 
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed == true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed == false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    //Save to local
    const saveLocalTodoes = () => {
        localStorage.setItem("todos", JSON.stringify(todos))

    };
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        }
        else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal);
        }
    };

    return (
        <div className="background-imgToDo">
            <h1 className="animate__animated animate__zoomInDown  animate__delay-1s">To Do List </h1>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <TodoLists filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        </div>
    );
}

export default ToDo;
