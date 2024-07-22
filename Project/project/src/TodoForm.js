import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [tags, setTags] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            title,
            description,
            date,
            tags: tags.split(',').map(tag => tag.trim()),
            priority
        });
        setTitle('');
        setDescription('');
        setDate('');
        setTags('');
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Назва справи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                placeholder="Дата/час виконання"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <textarea
                placeholder="Опис справи"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Теги (через кому)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />
            <input
                type="text"
                placeholder="Приоритизація"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default TodoForm;
