import React from 'react';
import { BookOpen, Construction } from 'lucide-react';

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Construction className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Em andamento</h2>
        <p className="text-gray-600 mb-6">
          O blog está atualmente em desenvolvimento. Os artigos estarão disponíveis em breve.
        </p>
        <div className="flex items-center justify-center text-blue-600">
          <BookOpen className="h-5 w-5 mr-2" />
          <span>Conteúdo em preparação</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;