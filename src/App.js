import logo from './logo.svg';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import Home from './components/Home';
import './index.css';
import { createBrowserRouter, BrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
        path:'/portfolio',
        element: <Home/>
    }
])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
