import React from 'react';
import { BookOpen, Briefcase, Code } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            Com 22 anos de idade, sou um profissional apaixonado por tecnologia e inovação. Minha jornada no mundo da tecnologia começou cedo, e desde então venho construindo uma carreira sólida que une desenvolvimento de software com visão estratégica de negócios.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Formação Acadêmica</h2>
            </div>
            <p className="text-gray-600">
              Graduado em Sistemas de Informação pela Universidade do Sul de Santa Catarina, onde desenvolvi uma base sólida em computação e gestão de tecnologia.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Interesses</h2>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li>• Desenvolvimento de Software</li>
              <li>• Arquitetura de Sistemas</li>
              <li>• Inovação Tecnológica</li>
              <li>• Empreendedorismo Digital</li>
              <li>• Soluções Empresariais</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Perfil Profissional</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Minha abordagem profissional combina expertise técnica com uma forte compreensão do ambiente empresarial. Busco constantemente inovar e criar soluções que não apenas resolvem problemas técnicos, mas também agregam valor real aos negócios.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Principais Características:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Pensamento analítico e resolução de problemas</li>
              <li>• Capacidade de liderança e trabalho em equipe</li>
              <li>• Foco em resultados e melhoria contínua</li>
              <li>• Adaptabilidade e aprendizado rápido</li>
              <li>• Visão estratégica e orientação a negócios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;