import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Travaillons <span className="text-red-500">Ensemble</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Prêt·e à concrétiser votre projet ? Contactez-moi pour en discuter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">aiwasenaiziath.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <p className="text-gray-400">+229 01 53 93 00 31</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className="text-gray-400">Bénin, disponible en remote</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h4 className="font-semibold mb-3">Temps de réponse</h4>
              <p className="text-gray-400 text-sm">
                Je réponds généralement sous 24h. Pour les projets urgents, 
                n'hésitez pas à me contacter directement par téléphone.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Type de projet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="site-vitrine">Site Vitrine</option>
                  <option value="e-commerce">Site E-commerce</option>
                  <option value="application">Application Web</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet en quelques mots..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;