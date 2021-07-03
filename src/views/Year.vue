<template>
  <div class="container">
    <ConsCard 
      :name="yearData.name"
      :allIndex="Number(yearData.all)"
    />
    <ConsList :data="yearData" />
  </div>
</template>

<script>
import { computed, onMounted, ref, onActivated } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

import ConsList from '@/components/List/Year'

export default {
  name: 'YearPage',
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
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>