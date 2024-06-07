import React from 'react'
import Home from './Home/Home'
import {Routes, Route} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Error from './components/Error'
import Contact from './contact/Contact'
import About from './About/About'


const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </div>
    </>
  )
}

export default App

