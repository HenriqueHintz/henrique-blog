import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';

function Contact() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:rico.pompeo@gmail.com" className="text-gray-900 hover:text-blue-600">
                      rico.pompeo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a href="tel:+5548991808700" className="text-gray-900 hover:text-blue-600">
                      (48) 99180-8700
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Localização</p>
                    <p className="text-gray-900">Florianópolis, SC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Redes Sociais</h2>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/henriquehintz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/henriquehintz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;