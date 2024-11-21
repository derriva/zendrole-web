/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from '@/plugins'

// Components
import App from './App.vue'

// Composables
import {createApp} from 'vue'

// Styles
import '@/styles/index.css'

// Load all icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

registerPlugins(app)

app.mount('#app')
