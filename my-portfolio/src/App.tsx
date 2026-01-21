import './styles/App.css'
import { ProjectsSection } from './sections/Projects'
import { SkillsSection } from './sections/Skills'
import { HeroSection } from './sections/Hero'
import { SkillsDetailsSection } from './sections/SkillsDetails'
import Carousel from './components/Carousel'
import { WebBrowser } from './components/WebBrowser'
import { PhoneApp } from './components/PhoneApp'
import { CodeEditor } from './components/CodeEditor'

function App() {

  return (
    <div className="flex flex-col mx-auto w-screen h-screen from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <HeroSection />
        <SkillsSection />
        <Carousel>
          <WebBrowser />
          <PhoneApp />
          <CodeEditor />
        </Carousel>
      </div>
      <SkillsDetailsSection />
      <ProjectsSection />
    </div>
  )
}

export default App
