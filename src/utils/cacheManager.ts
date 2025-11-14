/**
 * Utilitaire pour gérer et nettoyer les caches du navigateur
 */

class CacheManager {
  /**
   * Nettoie tous les caches du navigateur
   */
  static async clearAllCaches(): Promise<void> {
    try {
      // Nettoyer le Cache API
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('✅ Caches API nettoyés:', cacheNames);
      }

      // Nettoyer le localStorage
      localStorage.clear();
      console.log('✅ localStorage nettoyé');

      // Nettoyer le sessionStorage
      sessionStorage.clear();
      console.log('✅ sessionStorage nettoyé');

      // Nettoyer IndexedDB (si disponible)
      if ('indexedDB' in window) {
        // Note: IndexedDB nécessite une approche différente
        // Cette fonctionnalité nécessite une confirmation utilisateur
        console.log('ℹ️ IndexedDB détecté - nécessite une action manuelle');
      }
    } catch (error) {
      console.error('❌ Erreur lors du nettoyage des caches:', error);
      throw error;
    }
  }

  /**
   * Nettoie uniquement le Cache API
   */
  static async clearCacheStorage(): Promise<void> {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('✅ Cache Storage nettoyé');
    } else {
      console.log('ℹ️ Cache API non disponible');
    }
  }

  /**
   * Nettoie uniquement le localStorage
   */
  static clearLocalStorage(): void {
    localStorage.clear();
    console.log('✅ localStorage nettoyé');
  }

  /**
   * Nettoie uniquement le sessionStorage
   */
  static clearSessionStorage(): void {
    sessionStorage.clear();
    console.log('✅ sessionStorage nettoyé');
  }

  /**
   * Force le rechargement de la page sans cache
   */
  static hardReload(): void {
    // Rechargement forcé sans cache
    window.location.reload();
  }

  /**
   * Recharge la page avec un timestamp pour éviter le cache
   */
  static reloadWithoutCache(): void {
    const timestamp = new Date().getTime();
    window.location.href = `${window.location.pathname}?t=${timestamp}${window.location.hash}`;
  }

  /**
   * Vérifie l'espace utilisé par le cache
   */
  static async getCacheInfo(): Promise<{
    cacheNames: string[];
    localStorageSize: number;
    sessionStorageSize: number;
  }> {
    const cacheNames = 'caches' in window ? await caches.keys() : [];
    
    // Calculer la taille du localStorage
    let localStorageSize = 0;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorageSize += localStorage[key].length + key.length;
      }
    }

    // Calculer la taille du sessionStorage
    let sessionStorageSize = 0;
    for (const key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key)) {
        sessionStorageSize += sessionStorage[key].length + key.length;
      }
    }

    return {
      cacheNames,
      localStorageSize,
      sessionStorageSize,
    };
  }
}

export default CacheManager;

