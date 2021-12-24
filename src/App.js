import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Registrationform from './components/Registrationform'
import Helloworld from './components/Helloworld'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Registrationform />}/>
        <Route path='/Helloworld' element={<Helloworld />}/>
     </Routes>
    </Router>
    
    </>
  )
}

export default App

