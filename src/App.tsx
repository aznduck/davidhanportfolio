import { useState } from 'react'
import About from './components/About'
import Education from './components/Education'
import ExperienceList from './components/ExperienceList'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import ProjectGrid from './components/ProjectGrid'
import WaddlingDuck from './components/WaddlingDuck'
import { theme } from './content'

const QUACKS_FOR_YELLOW = 5

export default function App() {
  const [quacks, setQuacks] = useState(0)
  const [waddling, setWaddling] = useState(false)

  const quack = () => {
    setQuacks((q) => q + 1)
    setWaddling(true)
  }

  return (
    <>
      <Nav onDuckClick={quack} />
      <main>
        <Hero particleColor={quacks >= QUACKS_FOR_YELLOW ? theme.accent : '#8a8a90'} />
        <ExperienceList />
        <ProjectGrid />
        <Education />
        <About />
      </main>
      <Footer />
      {waddling && <WaddlingDuck key={quacks} onDone={() => setWaddling(false)} />}
    </>
  )
}
