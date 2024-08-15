import { createRoot } from 'react-dom/client';
import React from "react";

function App() {
    return (
        <div>
            <h3>Hello There! What is your name?</h3>
            <input></input>
            <button onClick={() => alert("Hello")}>Say Hello</button>
        </div>
    );
}

const test = '';
const root = createRoot(document.getElementById('root'));
// const rootElement = document.getElementById('root') as HTMLElement;
// const root = createRoot(rootElement);
root.render(<App />);

