import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, editTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
