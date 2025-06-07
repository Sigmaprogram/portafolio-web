import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-dark-400 bg-dark-200">
      <div className="container container-padding flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm text-dark-900 md:text-left">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-dark-900 hover:text-white transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-dark-900 hover:text-white transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-dark-900 hover:text-white transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:tu@email.com">
            <Mail className="h-5 w-5 text-dark-900 hover:text-white transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
