import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client';
import Title from './components/Title.jsx';


// Utiliza createRoot para montar tu aplicación
createRoot(document.getElementById('root')).render(<Title />);
