import AboutSection from '@/components/section/AboutSection'
import AchievementsSection from '@/components/section/AchievementsSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/section/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/section/ProjectsSection'
import SkillsSection from '@/components/section/SkillsSection'
import EmailSection from '@/components/section/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
      </div>
      <Footer />
    </main>
  )
}
