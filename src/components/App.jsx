import React from 'react';
import TodoList from './TodoList';
import TodoInput from "./TodoInput";

const App = () => (
    <div> 
        <h1>
            A small Todo App with Webpack
        </h1>
        <TodoList />
        <TodoInput />
    </div>
);

export default App;