import './styles/App.css'
import { ProjectsSection } from './sections/Projects'
import { SkillsSection } from './sections/Skills'
import { HeroSection } from './sections/Hero'

function App() {

  return (
    <div>
      <img className='ml-auto' src=""></img>
      <h1>Jaime Angeles</h1>
      <p>Fullstack Developer focused on performance, clean UI, and maintainable code.</p>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}

export default App
