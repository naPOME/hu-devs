import React from 'react'
import { Code } from 'lucide-react'
export const NavBar = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white sticky text-blue-700">
        <a className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">HUDC</span>
        </a>
        <nav className="ml-auto flex  gap-4 sm:gap-6">
          <a
            className="text-sm font-bold hover:underline underline-offset-4"
            href="#features"
          >
            why join us
          </a>
          <a
            className="text-sm font-bold hover:underline underline-offset-4"
            href="#about"
          >
            about
          </a>
          <a
            className="text-sm font-bold hover:underline underline-offset-4"
            href="#Event"
          >
            Event
          </a>
          <a
            className="text-sm font-bold hover:underline underline-offset-4"
            href="#contact"
          >
            contact
          </a>

        </nav>
      </header>
  )
}
