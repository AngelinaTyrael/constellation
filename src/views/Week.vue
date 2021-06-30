<template>
  <div class="container">
    Week
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

export default {
  name: 'WeekPage',
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