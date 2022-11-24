<template>
  <v-app>
    <LayoutDefaultNavBar :order="10" />
    <LayoutDefaultNavDrawer :order="30" />
    <slot />
    <LayoutDefaultFooter :order="20" />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  }
}
</script>
