import React from 'react';
import { createRoot } from 'react-dom/client';
// import style
import './styles/style.css';
import FormApp from './components/FormApp'




const root = createRoot(document.getElementById('root'));
root.render(<FormApp/>);