import { useState } from 'react' 
import './App.css'
import Team from './Team/Team'
import IncDesc from './inc-desc/inc-desc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Team />  
      <IncDesc/>
    </>
  )
}

export default App
