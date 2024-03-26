'use client'
import Home from '@/components/core/home/Home'
import NavBar from '@/components/layout/home/NavBar'
import { useState } from 'react'
import WhyGrito from '../components/core/home/WhyGrito'
// import Home from './ui/Home'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home isMenuOpen={isMenuOpen} />
      <WhyGrito />
    </main>
  )
}
