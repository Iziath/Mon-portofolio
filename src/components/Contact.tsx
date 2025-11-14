import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: 'Envoi en cours...'
    });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: '✅ Message envoyé ! Je vous recontacterai sous 24h.'
        });

        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitStatus(prev => ({ ...prev, isSubmitted: false, message: '' }));
        }, 5000);
      } else {
        throw new Error(data.message || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: '❌ Erreur d\'envoi. Contactez-moi directement par email ou téléphone.'
      });

      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, isError: false, message: '' }));
      }, 7000);
    }
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
          {/* Bloc informations */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:aiwasensiziath@gmail.com" 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    aiwasenaiziath@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <a 
                    href="tel:+22901539300031" 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    +229 01 53 93 00 31
                  </a>
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
              <h4 className="font-semibold mb-3">⏱️ Temps de réponse</h4>
              <p className="text-gray-400 text-sm">
                Je réponds généralement sous 24h. Pour les projets urgents, 
                n'hésitez pas à me contacter directement par téléphone.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg flex items-start ${
                submitStatus.isSubmitted 
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : submitStatus.isError
                  ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                  : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
              }`}>
                {submitStatus.isSubmitting ? (
                  <Loader className="w-5 h-5 mr-3 mt-0.5 animate-spin flex-shrink-0" />
                ) : submitStatus.isSubmitted ? (
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none disabled:opacity-50"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none disabled:opacity-50"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Type de projet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none disabled:opacity-50"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="site-vitrine">Site Vitrine</option>
                  <option value="e-commerce">Site E-commerce</option>
                  <option value="application">Application Web</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="refonte">Refonte de site</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none resize-none disabled:opacity-50"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus.isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center"
              >
                {submitStatus.isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
