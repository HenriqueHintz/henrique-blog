import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <Cpu className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-xl font-bold text-gray-800">HHPP</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Início</Link>
                <Link to="/sobre" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Sobre</Link>
                <Link to="/experiencia" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Experiência</Link>
                <Link to="/habilidades" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Habilidades</Link>
                <Link to="/projetos" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Projetos</Link>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <Link to="/contato" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contato</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Abrir menu principal</span>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Sobre
              </Link>
              <Link 
                to="/experiencia" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Experiência
              </Link>
              <Link 
                to="/habilidades" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Habilidades
              </Link>
              <Link 
                to="/projetos" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Projetos
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                to="/contato" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={closeMenu}
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner mt-16">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/henriquehintz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-500"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/henriquehintz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-500"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:rico.pompeo@gmail.com" 
                className="text-gray-400 hover:text-gray-500"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm">
              © 2024 Henrique Hintz Pompeo Pereira. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;