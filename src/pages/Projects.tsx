import React from 'react';
import { Construction } from 'lucide-react';

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projetos</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Construction className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Seção em andamento</h2>
        <p className="text-gray-600">
          A seção de projetos está atualmente em desenvolvimento. Por favor, volte em breve.
        </p>
      </div>
    </div>
  );
}

export default Projects;