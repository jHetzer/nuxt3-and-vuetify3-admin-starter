// store.ts
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      drawer: true,
      rail: true
    }
  },
  actions: {
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    toggleRail () {
      this.rail = !this.rail
    }
  },

  getters: {
    /*
      getDrawer:(state)=>{
      state.drawer
    }
    */
  },

  persist: {
    afterRestore: (ctx) => {
      // eslint-disable-next-line no-console
      console.log(`just restored '${ctx.store}'`)
    },
    paths: ['drawer', 'rail']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
