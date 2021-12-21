import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/styles.scss'

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});


createApp(App).use(router).mount('#app')
