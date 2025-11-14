import { useState, useEffect } from 'react';
import { RefreshCw, Trash2 } from 'lucide-react';
import CacheManager from '../utils/cacheManager';

const CacheClearButton = () => {
  const [isClearing, setIsClearing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [showButton, setShowButton] = useState(import.meta.env.DEV);

  useEffect(() => {
    // Raccourci clavier: Ctrl+Shift+C pour afficher/masquer le bouton
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        setShowButton(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Masquer le message après 5 secondes
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleClearCache = async () => {
    setIsClearing(true);
    setMessage({ type: 'info', text: 'Nettoyage en cours...' });

    try {
      await CacheManager.clearAllCaches();
      setMessage({ 
        type: 'success', 
        text: '✅ Caches nettoyés avec succès ! Rechargement de la page...' 
      });
      
      // Recharger la page après 1 seconde
      setTimeout(() => {
        CacheManager.hardReload();
      }, 1000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: '❌ Erreur lors du nettoyage des caches' 
      });
      setIsClearing(false);
    }
  };

  if (!showButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {message && (
        <div className={`mb-2 px-4 py-2 rounded-lg text-sm ${
          message.type === 'success' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : message.type === 'error'
            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {message.text}
        </div>
      )}
      
      <button
        onClick={handleClearCache}
        disabled={isClearing}
        className="bg-gray-800 hover:bg-red-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        title="Nettoyer les caches (Ctrl+Shift+C pour afficher)"
      >
        {isClearing ? (
          <RefreshCw className="w-5 h-5 animate-spin" />
        ) : (
          <Trash2 className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default CacheClearButton;

