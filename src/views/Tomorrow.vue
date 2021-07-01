<template>
  <div class="container">
    <ConsCard 
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
    />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

export default {
  name: 'TomorrowPage',
  setup () {
    const store = useStore()
    const state = store.state

    onMounted(() => {
      getData(store)
    })

    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>