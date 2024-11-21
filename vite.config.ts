import react from '@vitejs/plugin-react-swc';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineVitestConfig({
  plugins: [react()],
  test: {
    globals: true,   // Permet d'utiliser des fonctions globales comme `describe`, `it`, etc.
    environment: 'jsdom', // Simule un environnement de navigateur (utile pour les tests de composants React)
    setupFiles: './src/setupTests.ts', // Si tu as un fichier de configuration global
    server: {
        deps: {
        inline: ['@vanessapeixoto/my-modal'], // Force Vitest à inclure ce module
      },
    }
  },
})
