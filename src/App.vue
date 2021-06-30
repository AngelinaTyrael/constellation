<template>
  <div>
    <my-header>星座物语</my-header>
    <NavBar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import Tab from '@/components/Tab'
import NavBar from '@/components/NavBar'

import { watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    router.push('/')
    store.commit('setField', 'today')

    watch(() => {
      return router.currentRoute.value.name
    }, (value) => {
      store.commit('setField', value)
    })
  }
}
</script>
