import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'vue-app',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'vue-frontend',
});

export default keycloak;

const { createApp } = Vue;
import App from './App.vue';
import Keycloak from 'keycloak-js';

createApp(
    {
        data()
        {
            return { username: '', password: '', message: '', loginSuccess: false };
        },
        methods:
        {
            handleLogin()
            {
                if (this.username === 'admin' && this.password === '1234')
                {
                    this.loginSuccess = true;
                    this.message = 'Login successful! Welcome, ' + this.username + '.';
                }
                else
                {
                    this.loginSuccess = false;
                    this.message = 'Invalid username or password. Try admin / 1234.';
                }
            }
        }
    }).mount('#app');