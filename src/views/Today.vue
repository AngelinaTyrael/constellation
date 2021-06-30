<template>
  <div class="container">
    Today
  </div>
</template>

<script>

import { onMounted } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

export default {
  name: 'TodayPage',
  setup () {
    const store = useStore()

    onMounted(() => {
      getData(store)
    })
  }
}
</script>

<style lang="scss" scoped>
  
</style>