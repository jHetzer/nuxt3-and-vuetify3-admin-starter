<template>
  <v-main class="mt-10">
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template #opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">
            Content title
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template #opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">
            Content title
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template #opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">
            Content title
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-main>
</template>

<script>
import { getActivePinia } from 'pinia'
import { useStore } from '@/store/layout/settings'

// map through that list and use the **$reset** fn to reset the state

export default {
  data () {
    return {
      store: useStore()
    }
  },
  methods: {
    resetStore () {
      getActivePinia()._s.forEach(store => store.$reset())
    }
  }
}
</script>
