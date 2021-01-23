<template>
  <div class="flex items-center justify-center w-screen h-screen bg-indigo-50">
    <div class="w-64 text-xs space-y-2">
      <icon-fume class="w-full h-full" primary="text-indigo-200" secondary="text-indigo-800" />
      <div class="flex items-center mx-8">
        <icon-check
          class="w-6 h-6 mr-2.5"
          :primary="ssr ? 'text-green-300' : 'text-gray-300'"
          :secondary="ssr ? 'text-green-500' : 'text-gray-500'"
        />
        <span>Server-Side rendering</span>
      </div>
      <div class="flex items-center mx-8">
        <img src="/favicon.ico" class="w-6 h-6 mr-2.5" alt="favicon">
        <span>Statically sourced image</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async fetch () {
    this.random = (await fetch('https://random-data-api.com/api/stripe/random_stripe?size=10')
      .then(res => res.json()))
  },
  data () {
    return {
      random: Array
    }
  },
  computed: {
    ssr (): Boolean {
      return this.random.length > 0
    }
  }
})
</script>
