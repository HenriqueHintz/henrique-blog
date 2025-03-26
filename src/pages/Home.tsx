import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, TestTube, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Henrique Hintz Pompeo Pereira
            </h1>
            <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-6">
              
            </p>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="text-sm sm:text-base">
                Com 22 anos e formação em Sistemas de Informação pela Universidade do Sul de Santa Catarina,
                desenvolvo soluções que simplificam operações manuais, utilizando tecnologias como Node.js, Python, 
                Vue.js, TypeScript e Tailwind CSS para criar sistemas eficientes e intuitivos.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/henriquehintz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:rico.pompeo@gmail.com"
                className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Email
              </a>
              <a
                href="/cv-henrique-pereira.pdf"
                download
                className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Download CV
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Code className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Desenvolvimento</h3>
                </div>
                <p className="text-sm text-gray-600">Full Stack com foco em soluções eficientes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <TestTube className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Testes</h3>
                </div>
                <p className="text-sm text-gray-600">Qualidade e confiabilidade do código</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">UX Mobile</h3>
                </div>
                <p className="text-sm text-gray-600">Experiências mobile intuitivas</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl bg-gradient-to-b from-blue-50 to-white max-w-sm mx-auto">
              <img
                src={`/profile.jpg?t=${Date.now()}`}
                alt="Henrique Hintz Pompeo Pereira"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Tecnologias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {[
              'Node.js',
              'Python',
              'Vue.js',
              'TypeScript',
              'Tailwind CSS',
              'React.js'
            ].map((tech) => (
              <div key={tech} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="font-medium text-gray-900 text-sm sm:text-base">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;