import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
