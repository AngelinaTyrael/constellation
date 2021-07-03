<template>
  <div class="container">
    <ConsCard 
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
    />
    <ConsList 
      :data="tomorrowData" 
    />
  </div>
</template>

<script>
import { computed, onMounted, ref, onActivated } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

import ConsList from '@/components/List/Tomorrow'

export default {
  name: 'TomorrowPage',
  components: {
    ConsList
  },
  setup () {
    const store = useStore()
    const state = store.state
    const status = ref('')

    onMounted(() => {
      getData(store)
      status.value = state.consName
    })

    onActivated(() => {
      if (state.value !== state.consName) {
        status.value = state.consName
      }
    })

    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>