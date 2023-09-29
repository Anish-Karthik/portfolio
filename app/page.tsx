import AboutSection from '@/components/section/AboutSection'
import AchievementsSection from '@/components/section/AchievementsSection'
import EmailSection from '@/components/section/EmailSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/section/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/section/ProjectsSection'
import Image from 'next/image'
import SkillsSection from '@/components/section/SkillsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
