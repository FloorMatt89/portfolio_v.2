"use client"

import { useState } from "react"
import { Terminal, User, Code} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Home from "@/components/sections/Home"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"

export default function Portfolio() {
  const [selectedSection, setSelectedSection] = useState("home")

  const tabs = {
    home: {
      title: "home",
      content: <Home />,
    },
    about: {
      title: "about",
      content: <About />,
    },
    projects: {
      title: "projects",
      content: <Projects />,
    }
  }

  return (
    <div className="min-h-screen bg-background text-purple-blue p-4 md:p-8 font-mono">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center">
          {/* Desktop ASCII art */}
          <pre className="hidden lg:block hover:text-orange transition-colors duration-300 cursor-pointer text-green text-xs whitespace-pre overflow-x-auto">
            {` 
  ▄▄▄▄███▄▄▄▄      ▄████████     ███         ███        ▄█    █▄       ▄████████  ▄█     █▄          ▄████████    ▄████████    ▄██████▄  ███    █▄     ▄████████    ▄████████ 
 ▄██▀▀▀███▀▀▀██▄   ███    ███ ▀█████████▄ ▀█████████▄   ███    ███     ███    ███ ███     ███        ███    ███   ███    ███   ███    ███ ███    ███   ███    ███   ███    ███ 
 ███   ███   ███   ███    ███    ▀███▀▀██    ▀███▀▀██   ███    ███     ███    █▀  ███     ███        ███    █▀    ███    █▀    ███    █▀  ███    ███   ███    ███   ███    ███ 
 ███   ███   ███   ███    ███     ███   ▀     ███   ▀  ▄███▄▄▄▄███▄▄  ▄███▄▄▄     ███     ███        ███         ▄███▄▄▄      ▄███        ███    ███  ▄███▄▄▄▄██▀   ███    ███ 
 ███   ███   ███ ▀███████████     ███         ███     ▀▀███▀▀▀▀███▀  ▀▀███▀▀▀     ███     ███      ▀███████████ ▀▀███▀▀▀     ▀▀███ ████▄  ███    ███ ▀▀███▀▀▀▀▀   ▀███████████ 
 ███   ███   ███   ███    ███     ███         ███       ███    ███     ███    █▄  ███     ███               ███   ███    █▄    ███    ███ ███    ███ ▀███████████   ███    ███ 
 ███   ███   ███   ███    ███     ███         ███       ███    ███     ███    ███ ███ ▄█▄ ███         ▄█    ███   ███    ███   ███    ███ ███    ███   ███    ███   ███    ███ 
  ▀█   ███   █▀    ███    █▀     ▄████▀      ▄████▀     ███    █▀      ██████████  ▀███▀███▀        ▄████████▀    ██████████   ████████▀  ████████▀    ███    ███   ███    █▀  
                                                                                                                                                       ███    ███              
             `}
          </pre>
          {/* Mobile simplified version */}
          <div className="lg:hidden">
             {/* Mobile simplified version */}
          <pre className="lg:hidden hover:text-orange transition-colors duration-300 cursor-pointer text-green text-[0.5rem] md:text-xs whitespace-pre overflow-x-auto">
            {`   __  ___      __  __  __                     _____                           
  /  |/  /___ _/ /_/ /_/ /_  ___  _      __  / ___/___  ____ ___  ___________ _
 / /|_/ / __ \`/ __/ __/ __ \\/ _ \\| | /| / /  \\__ \\/ _ \\/ __ \`/ / / / ___/ __ \`/
/ /  / / /_/ / /_/ /_/ / / /  __/| |/ |/ /  ___/ /  __/ /_/ / /_/ / /  / /_/ / 
/_/  /_/\\__,_/\\__/\\__/_/ /_/\\___/ |__/|__/  /____/\\___/\\__, /\\__,_/_/   \\__,_/  
                                                      /____/                    `}
          </pre>
          </div>
          {/* <div className="flex items-center justify-center gap-4 text-green text-xl md:text-2xl mt-4">
            <span className="hover:text-orange transition-colors duration-300 cursor-pointer">iOS Developer</span>
            <span className="text-muted">•</span>
            <span className="hover:text-orange transition-colors duration-300 cursor-pointer">Machine Learning Engineer</span>
            <span className="text-muted">•</span>
            <span className="hover:text-yellow transition-colors duration-300 cursor-pointer">Mobile App Lead</span>
          </div> */}
        </div>
      </div>

      {/* Navigation */}
      <nav className="my-8 flex flex-wrap gap-4">
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "home" ? "text-purple" : ""}`}
          onClick={() => setSelectedSection("home")}
        >
          <Terminal className="w-4 h-4" />
          ~/home
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "about" ? "text-purple" : ""}`}
          onClick={() => setSelectedSection("about")}
        >
          <User className="w-4 h-4" />
          ~/about
        </Button>
        <Button
          variant="ghost"
          className={`gap-2 ${selectedSection === "projects" ? "text-purple" : ""}`}
          onClick={() => setSelectedSection("projects")}
        >
          <Code className="w-4 h-4" />
          ~/projects
        </Button>
      </nav>

      {/* Content */}
      <motion.div
        key={selectedSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {selectedSection === "home" && tabs.home.content}

        {selectedSection === "about" && tabs.about.content}

        {selectedSection === "projects" && (
          <div className="space-y-6">
            {tabs.projects.content}
          </div>
        )}
      </motion.div>
    </div>
  )
}


