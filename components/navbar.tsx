"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-400 bg-dark-100/95 backdrop-blur supports-[backdrop-filter]:bg-dark-100/60">
      <div className="container flex h-16 items-center justify-between container-padding">
        <div className="flex justify-start object-contain">
          <Link href="/">
          <img className="h-8" src="/logoweb.png" alt="" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            Projects
          </Link>
          {/* <Link href="/experience" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            Experience
          </Link> */}
          <Link href="/skills" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="/contact" className="text-sm font-medium text-dark-900 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 top-16 z-50 bg-dark-100 md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="container container-padding py-6">
          <nav className="flex flex-col space-y-6">
            <Link href="/" className="text-lg font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/projects" className="text-lg font-medium" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/experience" className="text-lg font-medium" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="/skills" className="text-lg font-medium" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="absolute right-6 top-6" onClick={toggleMenu}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
