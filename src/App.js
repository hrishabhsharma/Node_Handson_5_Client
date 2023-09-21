import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LogPage from './ChattingApp/LogPage'
import HomePage from './ChattingApp/HomePage'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogPage/>}/>
      <Route path='/Home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App