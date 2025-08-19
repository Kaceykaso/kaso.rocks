import { useState } from 'react'
import { Hero } from './components/Hero'
import { Gameboy } from './components/Gameboy'
import { MessageList } from './components/MessageList'
import { Footer } from './components/Footer'
import './css/main.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <section className="main">
        <Gameboy />
        <MessageList />
      </section>

      <Footer />
    </>
  )
}

export default App
