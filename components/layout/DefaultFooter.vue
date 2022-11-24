<template>
  <v-footer app absolute :order="order" elevation="2" :class="textSize">
    <span>&copy; {{ new Date().getFullYear() }} - {{ author }}</span>
    <v-spacer />
    <v-btn variant="text" color="" :class="textSize">
      About
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  name: 'DefaultFooter',
  props: {
    order: {
      type: Number,
      default: 2,
      required: false
    }
  },
  data: () => ({
    fixed: false,
    textSize: 'text-caption',
    author: 'jHetzer'
  })
}
</script>
