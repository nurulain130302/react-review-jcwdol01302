import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter'
import Contacts from './pages/contatcs'

function App() {
  return (
    <>
    <h1>React Riview</h1>
    <hr />
    <a href="/">Counter</a> | <a href="/contacts">Contacts</a>
    <hr />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Counter></Counter>}></Route>
    <Route path='/contacts' element={<Contacts></Contacts>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
