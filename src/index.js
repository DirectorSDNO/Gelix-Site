import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Добавлен импорт глобальных стилей со сбросом отступов
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);