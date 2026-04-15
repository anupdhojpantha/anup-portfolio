"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import dynamic from 'next/dynamic';

// Dynamically import the PDF viewer to avoid SSR issues
const PdfViewer = dynamic(
  () => import('@/components/PdfViewer'),
  { ssr: false }
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'anup/document/Anuppantha_resume.pdf';
    link.download = 'Anuppantha_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 250)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Original Navbar - Hidden when scrolled */}
      <header className={`sticky top-0 z-40 w-full border-b border-amber-500/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-x-[3px] font-bold text-xl">
            <span className="inline-block w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#F59E42"/>
              <path d="M16 6 L24 26 H20 L16 14 L12 26 H8 L16 6 Z 
             M14 18 H18" 
             stroke="white" 
             strokeWidth="2.2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             fill="none"/>
            </svg>
            </span>
            NUP
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-amber-500">
              Home
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-amber-500">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-amber-500">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-amber-500">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-amber-500">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-amber-500">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Scroll-triggered Glassmorphism Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="mx-auto mt-3 w-full sm:w-[60%] sm:max-w-7xl px-4 sm:px-0">
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            {/* Glassmorphism gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
            
            {/* Content */}
            <div className="relative px-4 py-2 sm:px-5">
              <div className="flex items-center justify-between">
                {/* Name with elegant styling */}
                <div className="flex items-center gap-0.5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-sm"></div>
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-base font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      nup Pantha
                    </h1>
                    
                  </div>
                </div>

                {/* View Resume Button */}
                <div className="flex items-center gap-2 sm:gap-4">
                  {/* Desktop Button */}
                  <button 
                    onClick={handleDownloadResume}
                    className="hidden sm:flex group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:from-amber-500/30 hover:to-amber-600/30 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/25 cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  
                  {/* Mobile Button - Icon Only */}
                  <button 
                    onClick={handleDownloadResume}
                    className="sm:hidden group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 p-2.5 text-foreground transition-all duration-300 hover:from-amber-500/30 hover:to-amber-600/30 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/25 cursor-pointer"
                    aria-label="Download Resume"
                  >
                    <span className="relative z-10">
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1  idd01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  
                  {/* Theme Toggle - Now visible on mobile too */}
                  <div className="cursor-pointer">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
        </div>
      </header>
    </>
  )
}