import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routes/Routes';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <title>AppCitas</title>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

    </>
  )
}

export default App
