import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AuthForms from './components/auth-forms/AuthForms.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>
  },
  {
    path: '/login',
    element: <AuthForms razon={"login"}/>
  },
  {
    path: "/register",
    element: <AuthForms razon={"register"}/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
