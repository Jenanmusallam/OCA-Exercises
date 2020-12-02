import React from 'react';
import ToDo from '../ToDoList/Todo';



const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container  animate__animated animate__flipInX animate__delay-3s">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <ToDo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} />
                ))}
            </ul>
        </div>
    );
};
export default TodoList;