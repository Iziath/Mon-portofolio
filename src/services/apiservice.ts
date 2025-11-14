// src/services/apiService.ts - Service pour communiquer avec le backend

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

class ApiService {
  private static baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  /**
   * Envoie un message de contact
   */
  static async sendContactMessage(formData: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      return {
        success: false,
        message: 'Erreur de connexion. Veuillez réessayer.'
      };
    }
  }

  /**
   * Teste la connexion avec le backend
   */
  static async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/`, {
        method: 'GET',
      });
      return response.ok;
    } catch (error) {
      console.error('Backend non accessible:', error);
      return false;
    }
  }

  /**
   * Teste la configuration email
   */
  static async testEmailConfig(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/test-email`, {
        method: 'GET',
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur test email:', error);
      return {
        success: false,
        message: 'Impossible de tester la configuration email'
      };
    }
  }
}

export default ApiService;
export type { ContactFormData, ApiResponse };