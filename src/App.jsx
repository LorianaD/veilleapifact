import { Route, Routes } from 'react-router'
import './App.css'
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
        <Route path='/' element={< Reads />}></Route>
        <Route path='/read/:id' element={< Read />}></Route>
        <Route path='/create' element={< Create />}></Route>
        <Route path='/update/:id' element={< Update />}></Route>
        <Route path='/delete/:id' element={< Delete />}></Route>
      </Routes>
    </>
  )
}

export default App
