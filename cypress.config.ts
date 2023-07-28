import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.naver.com',
    setupNodeEvents(on, config) {},
  },
});
