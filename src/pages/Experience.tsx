import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';

function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Experiência Profissional</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Desenvolvedor Full Stack Senior</h2>
              <div className="flex items-center mt-1 space-x-2 text-gray-500">
                <Building className="h-4 w-4" />
                <span>Empresa Tecnológica</span>
                <Calendar className="h-4 w-4 ml-4" />
                <span>2022 - Presente</span>
              </div>
              <p className="mt-4 text-gray-600">
                Desenvolvimento de soluções empresariais complexas utilizando tecnologias modernas.
                Liderança de equipe e gestão de projetos de grande escala.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Desenvolvedor Full Stack</h2>
              <div className="flex items-center mt-1 space-x-2 text-gray-500">
                <Building className="h-4 w-4" />
                <span>Startup Inovadora</span>
                <Calendar className="h-4 w-4 ml-4" />
                <span>2020 - 2022</span>
              </div>
              <p className="mt-4 text-gray-600">
                Desenvolvimento de aplicações web e mobile, implementação de arquiteturas escaláveis
                e participação ativa no processo de tomada de decisões técnicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;