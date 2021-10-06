<template>
  <div class="flex items-center justify-center w-screen h-screen bg-indigo-50">
    <div class="w-1/4 text-xs flex flex-col justify-center items-center">
      <icon-fume class="w-1/2 h-1/2" primary="text-indigo-200" secondary="text-indigo-800" />
      <div class="flex flex-col bg-white border rounded-md divide-gray-200 divide-y ">
        <div class="flex items-center space-x-2 px-3 py-2">
          <icon-spinner v-if="!ssr" class="w-6 h-6" />
          <icon-check
            v-else
            class="w-4 h-4"
            primary="text-green-300"
            secondary="text-green-500"
          />
          <span>Server-Side rendering</span>
          <span class="text-gray-500">({{ version }} - v2.15.8)</span>
        </div>
        <div class="flex items-center space-x-2 px-3 py-2">
          <img src="/favicon.ico" class="w-6 h-6" alt="favicon">
          <span>Statically sourced image</span>
        </div>
        <div class="flex items-center space-x-2 px-3 py-2">
          <icon-aws class="w-6 h-6" />
          <span>Docker test build number <span class="font-semibold">78</span></span>
        </div>
        <div class="flex items-center space-x-2 px-3 py-2">
          <icon-cog class="w-4 h-4" />
          <span>process.env.apiUrl <span class="font-semibold">{{ envApiUrl }}</span></span>
        </div>
        <!--<pre class="w-64 h-64 overflow-scroll"> {{ env }} </pre> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async fetch (): Promise<void> {
    console.log('log inside a fetch()', process.env.API_URL)
    this.random = (await fetch('https://random-data-api.com/api/stripe/random_stripe?size=10')
      .then(res => res.json()))
    this.version = process.version
  },
  data () {
    const random:any = []
    const version:string = ''
    return {
      version,
      random,
      apiUrl: this.$config.apiUrl,
      envApiUrl: process.env.API_URL,
    }
  },
  computed: {
    ssr (): Boolean {
      return this.random.length > 0
    }
  },
  created () {
    console.log('fume example created() console.log')
    console.warn('fume example created() console.warn')
    console.error('fume example created() console.error')
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    console.log('fume example mounted() message', process.env.API_URL)
  }
})
</script>
