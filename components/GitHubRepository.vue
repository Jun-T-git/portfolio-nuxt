<template>
  <a :href="repo.url" target="_blank" rel="noopener noreferrer">
    <div class="sm:flex sm:justify-between sm:align-top">
      <h4 class="text-base sm:text-lg font-semibold">
        {{ repo.name }}
      </h4>
      <span class="text-xs text-gray-500"
        >last update {{ repo.updatedAt.substr(0, 10) }}</span
      >
    </div>
    <p class="text-sm text-gray-700">{{ repo.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="lang in repo.languages.nodes"
        :key="lang.id"
        class="py-0.5 text-xs sm:text-sm"
        ><span class="px-0.5" :style="{ color: lang.color }">●</span
        >{{ lang.name }}</span
      >
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Repository } from '~/types/github'
import { PropType } from '@vue/composition-api'

export default Vue.extend({
  props: {
    repository: {
      type: Object as PropType<Repository>,
      required: true,
    },
  },
  data: function () {
    return { repo: this.repository }
  },
})
</script>
