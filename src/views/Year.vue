<template>
  <div class="container">
    <ConsCard 
      :name="yearData.name"
      :allIndex="Number(yearData.all)"
    />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getData from '@/services'

export default {
  name: 'YearPage',
  setup () {
    const store = useStore()
    const state = store.state

    onMounted(() => {
      getData(store)
    })

    return {
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>