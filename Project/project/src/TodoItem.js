import React, { useState } from 'react';

const TodoItem = ({ todo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState({ ...todo });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTodo({ ...editedTodo, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTodo(todo.id, editedTodo);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={editedTodo.title}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="datetime-local"
                        name="date"
                        value={editedTodo.date}
                        onChange={handleEditChange}
                        required
                    />
                    <textarea
                        name="description"
                        value={editedTodo.description}
                        onChange={handleEditChange}
                        required
                    ></textarea>
                    <input
                        type="text"
                        name="tags"
                        value={editedTodo.tags.join(', ')}
                        onChange={handleEditChange}
                    />
                    <input
                        type="text"
                        name="priority"
                        value={editedTodo.priority}
                        onChange={handleEditChange}
                    />
                    <button type="submit">Зберегти</button>
                </form>
            ) : (
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>{todo.date}</p>
                    <p>{todo.tags.join(', ')}</p>
                    <p>{todo.priority}</p>
                    <button onClick={() => setIsEditing(true)}>Редагувати</button>
                    <button onClick={() => removeTodo(todo.id)}>Видалити</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
