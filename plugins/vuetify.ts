import { createVuetify, ThemeDefinition } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md2 } from 'vuetify/blueprints'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#101719'
    /*
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#101719',
    'primary-darken-1': '#181818',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
    */
  }
}

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#2196F3'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md2,
    theme: {
      defaultTheme: 'customLightTheme',
      themes: {
        customLightTheme,
        customDarkTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
