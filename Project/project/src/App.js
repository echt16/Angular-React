import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch('http://localhost:3000/getTodos',
                    {
                        method:"post",
                        headers: {
                            'Content-Type':'application/json'
                        }
                    }
                );
                if(!res.ok){
                    throw new Error('Response not ok');
                }
                const result = await res.json();
                if(!Array.isArray(result))
                {
                    throw new Error('Reponse not ok');
                }
                else{
                    setTodos(result);
                    console.log(result);
                }
            }
            catch(err){
                setError(err);
            }
        };
        fetchData();
    }, []);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    if(error){
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h1>Список справ</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    );
};

export default App;
