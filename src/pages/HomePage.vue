<template>
  <div class="container-fluid">
    <div class="row" v-if="apod != null">
      <Apod />
    </div>
    <button @click="getApod" class="btn btn-success">
      Get Apod
    </button>
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
