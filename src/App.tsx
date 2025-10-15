import { CarList } from './components/CarList/CarList'
import './App.css'
import cars from '../public/api/cars.json'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState<string>('')

  const filteredCars = [...cars].filter(c => 
    c.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim()) 
    || c.model.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())
  )

  return (

    <CarList cars={filteredCars} searchValue={searchValue} setSearchValue={setSearchValue} />

  )
}

export default App
