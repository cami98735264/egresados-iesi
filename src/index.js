import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import AuthenticationContext from './authentication/AuthenticationContext.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import SPAMain from './components/spa_main/SPA_Main.js';
import FQuestions from './components/fquestions/FQuestions.js';
import AuthForms from './components/auth-forms/AuthForms.js';
import LayoutDashboard from './dashboard/layout/LayoutDashboard.js';
const AuthContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<><SPAMain/><FQuestions/></>}/>
  },
  {
    path: '/login',
    element: <AuthForms razon={"login"}/>
  },
  {
    path: "/register",
    element: <AuthForms razon={"register"}/>
  },
  {
    path: "/dashboard",
    element: <LayoutDashboard/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContext>
      <RouterProvider router={router}/>
    </AuthenticationContext>
  </React.StrictMode>
);


export default AuthContext;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
