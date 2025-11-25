import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OIP from "./assets/OIP.jpg"
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>test tailwind</h1>
      <Card username='chai' btntext='click me'/>
      <Card username='hits' btntext='views' />
    </>
  )
}

export default App
