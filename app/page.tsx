"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Building, Heart } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-slate-200 text-[#0f2133] ">
      {/* Decorative Elephant SVG Background */}
      <div className="fixed inset-0 overflow-hidden  pointer-events-none ">
        <svg className="absolute top-20 right-10 w-64 h-64 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 12A2.5 2.5 0 0 1 4 9.5A2.5 2.5 0 0 1 6.5 7A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 6.5 12M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
        </svg>
        <svg className="absolute bottom-20 left-10 w-48 h-48 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 12A2.5 2.5 0 0 1 4 9.5A2.5 2.5 0 0 1 6.5 7A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 6.5 12M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50  backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Elephant Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 12A2.5 2.5 0 0 1 4 9.5A2.5 2.5 0 0 1 6.5 7A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 6.5 12M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                </svg>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text ">
                Abewe Vanessa
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                About
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Experience
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Skills
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-transparent relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-20 w-3 h-3 bg-amber-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-amber-500 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-amber-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Large Elephant Icon */}
            {/* <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 12A2.5 2.5 0 0 1 4 9.5A2.5 2.5 0 0 1 6.5 7A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 6.5 12M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
                </svg>
              </div>
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text ">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-pretty  max-w-3xl mx-auto">
              Passionate Full Stack Developer with expertise in both frontend and backend development, including
              React.js, Express.js, and MongoDB. Creating dynamic, responsive, and user-friendly applications with the 
              <span className="font-semibold text-gray-700"> strength and wisdom</span> of an elephant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
             
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700"></div>
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="leading-relaxed mb-6  text-lg">
                  I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend
                  technologies. Like an elephant, I have a <span className="font-semibold text-gray-700">remarkable memory</span> for 
                  details and the <span className="font-semibold text-gray-700">strength</span> to handle complex challenges.
                </p>
                <p className="leading-relaxed mb-8  text-lg">
                  Known for my strong problem-solving abilities, quick learning curve, and effective communication in
                  collaborative environments. I approach each project with the <span className="font-semibold text-gray-700">
                  wisdom and patience</span> that comes from continuous learning and growth.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 px-4 py-2 text-sm">
                    🧠 Problem Solver
                  </Badge>
                  <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 px-4 py-2 text-sm">
                    ⚡ Quick Learner
                  </Badge>
                  <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 px-4 py-2 text-sm">
                    🤝 Team Player
                  </Badge>
                  <Badge className="bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-700 hover:to-gray-900 px-4 py-2 text-sm">
                    💬 Effective Communicator
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-gray-100 to-slate-500 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Building className="w-6 h-6 text-gray-600" />
                      <h3 className="font-bold text-gray-800 text-lg">Education</h3>
                    </div>
                    <p className="text-gray-600 font-medium">Bachelor of International Relations</p>
                    <p className="text-gray-600">University of Rwanda, Butare</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-100 to-slate-500 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-gray-600" />
                      <h3 className="font-bold text-gray-800 text-lg">Location</h3>
                    </div>
                    <p className="text-gray-600 font-medium">Kibagabaga, Kigali</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-transparent relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text ">
              Experience Journey
            </h2>
            <div className="space-y-8">
              {/* IgaCode Organisation */}
              <Card className="border-l-8 border-l-gray-600 bg-gradient-to-br from-gray-100 to-slate-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                        🐘 Front-End Developer
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-700 text-lg">ImageLeft Organisation</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500  px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      March 2024 - Present
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                    Collaborating with a team of professionals to develop modern day software that largely improved
                    overall technical skills. Working with the <span className="font-semibold">collective wisdom</span> of the team
                    to develop a user-friendly dashboard for managing agents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Redux Toolkit
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Ant Design
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      NextUI
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Prisma ORM
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Technika */}
              <Card className="border-l-8 border-l-gray-600 bg-gradient-to-br from-gray-100 to-slate-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                        🛠️ Back-End Developer
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-700 text-lg">Technika</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500  px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      July 2024 - October 2024
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                    Developed key modules for managing classes, tracking attendance, and recording health incidents
                    with the <span className="font-semibold">reliability and thoroughness</span> of an elephant's memory.
                    Integrated Cloudinary for secure image handling in talent management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Express.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      MongoDB
                    </Badge>
                    
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Cloudinary
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      API Development
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* SheCanCode Bootcamp */}
              <Card className="border-l-8 border-l-gray-600 bg-gradient-to-br from-gray-100 to-slate-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                        📚 Back-End Developer
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-700 text-lg">SheCanCode Bootcamp</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      February 2024 - May 2024
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                    Built a solid foundation in backend development with the <span className="font-semibold">patience and persistence</span> 
                    that defines great learning. Mastered JavaScript algorithms, Node.js, and database management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Express.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      MongoDB Atlas
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Deployment
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Andela Apprenticeship */}
              <Card className="border-l-8 border-l-gray-600 bg-gradient-to-br from-gray-100 to-slate-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                        🎨 Front-End Developer
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-700 text-lg">
                        Andela Apprenticeship Program
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500  px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      November 2022 - November 2023
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                    Where the journey began! Learned the fundamentals with <span className="font-semibold">determination and focus</span>,
                    mastering modern frontend technologies and building the foundation for future growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      Figma
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      API Integration
                    </Badge>
                    <Badge variant="outline" className="border-2 border-gray-500 text-gray-700 hover:bg-gray-50 px-3 py-1">
                      SSR/SSG
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300"></div>
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text ">
              Technical Arsenal 🛡️
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-gray-600">
                <CardHeader className="">
                  <CardTitle className="text-2xl text-gray-700 flex items-center justify-center gap-2">
                    🎨 Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">React.js</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Next.js</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">TypeScript</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Tailwind CSS</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Ant Design</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Redux</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-gray-600">
                <CardHeader className="">
                  <CardTitle className="text-2xl text-gray-700 flex items-center justify-center gap-2">
                    ⚙️ Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Node.js</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Express.js</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">RESTful APIs</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">JWT</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Session Management</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-gray-500 px-3 py-2">Access Control</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

                            <Card className="bg-gradient-to-br from-gray-100 to-slate-500 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-gray-600">
                <CardHeader className="">
                  <CardTitle className="text-2xl text-gray-700 flex items-center justify-center gap-2">
                    🗄️ Databases & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">MongoDB</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">PostgreSQL</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">Prisma</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">Knex.js</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">Git</Badge>
                      <Badge className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-2 hover:from-gray-800 hover:to-gray-500">Docker</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-transparent relative">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text ">
              Let’s Connect 🤝
            </h2>
            <p className="text-lg mb-12 text-gray-600">
              Whether you’re looking to collaborate on a project, hire a developer, or just chat tech — feel free to reach out!
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 shadow-lg hover:shadow-xl border-l-4 border-l-gray-600 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Mail className="w-6 h-6 text-gray-700" />
                  <p className="font-medium text-gray-700">Email</p>
                  <a href="mailto:your@email.com" className="text-gray-600 hover:text-white">vanessabewe@email.com</a>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 shadow-lg hover:shadow-xl border-l-4 border-l-gray-600 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Phone className="w-6 h-6 text-gray-700" />
                  <p className="font-medium text-gray-700">Phone</p>
                  <a href="tel:+250700000000" className="text-gray-600 hover:text-white">+250 787 800 619</a>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 shadow-lg hover:shadow-xl border-l-4 border-l-gray-600 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Github className="w-6 h-6 text-gray-700" />
                  <p className="font-medium text-gray-700">GitHub</p>
                  <a href="https://github.com/vanessa-abewe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
                    github.com/vanessa-abewe
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-100 to-slate-500 shadow-lg hover:shadow-xl border-l-4 border-l-gray-600 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                  <p className="font-medium text-gray-700">LinkedIn</p>
                  <a href="https://linkedin.com/in/vanessa-abewe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
                    linkedin.com/in/vanessa-abewe
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 border-t border-stone-200 bg-sage-50">
        <div className="container mx-auto text-center">
          <p className="text-stone-600">
            © 2024 Abewe Vanessa. 🐘
          </p>
        </div>
      </footer>
    </div>
  )
}
