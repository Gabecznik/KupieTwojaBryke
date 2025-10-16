import { CarList } from './components/CarList/CarList'
import './App.css'
import cars from '../public/api/cars.json'
import { useState } from 'react'
import { CarForm } from './components/CarForm/CarForm'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [searchValue, setSearchValue] = useState<string>('')

  const filteredCars = [...cars].filter(c => 
    c.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim()) 
    || c.model.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())
  )

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/list">Lista samochodów</Link>
        <Link to="/form">Dodaj samochód</Link>
      </nav>

    <Routes>
      <Route
        path='/list'
        element={
          <CarList 
          cars={filteredCars} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          />
        }
      />
      <Route 
        path='/form'
        element = {<CarForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
