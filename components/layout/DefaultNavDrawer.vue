<template>
  <v-navigation-drawer
    v-model="drawerStore.drawer"
    app
    :rail="drawerStore.rail"
    permanent
    expand-on-hover
    elevation="2"
    :order="order"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template #append>
        <v-btn
          variant="text"
          icon="mdi-chevron-right"
          @click.stop="drawerStore.toggleRail()"
        />
      </template>
    </v-list-item>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="i"
      />
    </v-list>
    <template #append>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-delete-sweep"
          title="Clear Settings"
          value="1"
          @click="resetStore"
        />
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          to="/error"
          value="2"
        />
      </v-list>
    </template>
    <v-snackbar
      v-model="snackbar"
      timeout="1500"
    >
      Settings cleared succesfully

      <template #actions>
        <v-btn
          color="green"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-navigation-drawer>
</template>

<script>

import { getActivePinia } from 'pinia'
import { useStore } from '@/store/layout/drawer'

export default {
  props: {
    order: {
      type: Number,
      default: 2,
      required: false
    }
  },
  setup () {
    const drawerStore = useStore()

    return { drawerStore }
  },
  data: () => ({
    snackbar: false,
    items: [
      { title: 'Home', icon: 'mdi-home-city', to: '/' },
      { title: 'My Account', icon: 'mdi-account', to: 'account' },
      { title: 'Users', icon: 'mdi-account-group-outline', to: '/users' }
    ]
  }),
  methods: {
    resetStore () {
      getActivePinia()._s.forEach(store => store.$reset())
      this.snackbar = true
    }
  }
}
</script>
