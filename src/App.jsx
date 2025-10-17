import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home'
import Header from './components/layaout/header'
import Read from './components/Read'
import Create from './components/Create'
import Update from './components/Update'
import Delete from './components/Delete'
import Reads from './components/Reads'

function App() {

  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path='/reads' element={< Reads />}></Route>
        <Route path='/read' element={< Read />}></Route>
        <Route path='/create' element={< Create />}></Route>
        <Route path='/update' element={< Update />}></Route>
        <Route path='/delete' element={< Delete />}></Route>
      </Routes>
    </>
  )
}

export default App
