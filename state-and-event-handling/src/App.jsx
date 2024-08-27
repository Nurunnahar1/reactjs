import { useState } from 'react' 
import './App.css'
import Team from './Team/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Team/> 
    </>
  )
}

export default App
