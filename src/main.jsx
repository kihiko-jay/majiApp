import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App.jsx'; // Import the main App component
//import './index.css'; // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);
