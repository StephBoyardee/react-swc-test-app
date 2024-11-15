import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './Profile.jsx'
import TodoList from './TodoList.jsx'

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'





export function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add a "catch-all" route for 404s */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Gallery />
      <TodoList />
    </>
  )
}
export default App
