import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import LeftSide from './Components/LeftSide'
import TopSide from './Components/TopSide'
import Dashboard from './Components/Links/Dashboard'
import Slots from './Components/Links/Slots'
import RemainingSlot from './Components/Links/RemainingSlot'
import BookedSlot from './Components/Links/BookedSlot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='left' element={<LeftSide/>}/>
          <Route path='top' element={<TopSide/>}/>
          <Route path='slots' element={<Slots/>}/>
          <Route path='remaining' element={<RemainingSlot/>}/>
          <Route path='booked' element={<BookedSlot/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
