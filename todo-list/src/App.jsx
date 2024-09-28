import { useState } from 'react'

import './App.css'
import ListToDoComponent from './components/ListToDoComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListToDoComponent/>
    </>
  )
}

export default App
