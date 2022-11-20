<template>
  <div class="flex flex-col items-center gap-2">
    <div class="relative overflow-hidden">
      <level-circle :degree="degree" :color="color" />
      <img
        :src="src"
        class="pointer-events-none absolute top-5 left-5"
        height="72"
        width="72"
      />
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LevelCircle from './LevelCircle.vue'

export default Vue.extend({
  components: { LevelCircle },
  props: {
    name: { type: String, required: true },
    src: { type: String, required: true },
    degree: { type: Number, required: true },
    color: { type: String, required: true },
  },
})
</script>
