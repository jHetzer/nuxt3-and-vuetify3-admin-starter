<template>
  <v-app-bar :order="order">
    <v-app-bar-nav-icon @click="drawerStore.toggleDrawer()" />

    <v-toolbar-title color="primary">
      Application
    </v-toolbar-title>
    <v-text-field
      hide-details
      prepend-inner-icon="mdi-magnify"
      single-line
    />
    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-menu :location="location">
      <template #activator="{ props }">
        <v-btn
          icon
          v-bind="props"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      :icon="themeSwitchIcon"
      @click="toggleTheme"
    />
  </v-app-bar>
</template>

<script>

import { useTheme } from 'vuetify'
import { useStore } from '@/store/layout/drawer'

export default {
  name: 'DefaultNavBar',
  props: {
    order: {
      type: Number,
      default: 0,
      required: false
    }
  },
  setup () {
    const theme = useTheme()
    const themeSwitchIcon = ref('mdi-moon-waning-crescent')

    function darkModeIconSelector () {
      return !theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-moon-waning-crescent'
    }

    themeSwitchIcon.value = darkModeIconSelector()

    return {
      theme,
      drawerStore: useStore(),
      themeSwitchIcon,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
        themeSwitchIcon.value = darkModeIconSelector()
      }
    }
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ],
    location: 'bottom'
  })
}
</script>
