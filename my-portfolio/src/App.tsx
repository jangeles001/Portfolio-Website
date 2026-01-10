import './styles/App.css'
import { ProjectsSection } from './sections/Projects'
import { SkillsSection } from './sections/Skills'
import { HeroSection } from './sections/Hero'
import { SkillsDetailsSection } from './sections/SkillsDetails'

function App() {

  return (
    <div className="flex flex-col mx-auto w-screen h-screen">
      <HeroSection />
      <SkillsSection />
      <SkillsDetailsSection />
      <ProjectsSection />
    </div>
  )
}

export default App
