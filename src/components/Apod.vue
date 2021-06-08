<template>
  <div class="col-10 m-auto">
    <h1>{{ apod.title }}</h1>
    <img :src="apod.hdurl" alt="">
    <p>{{ apod.explanation }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { apodService } from '../services/ApodService'

export default {

  setup() {
    return {
      apod: computed(() => AppState.apod),
      getApod() {
        apodService.getApod()
      }
    }
  }
}
</script>

<style scoped>

</style>
