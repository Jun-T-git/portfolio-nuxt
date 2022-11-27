<template>
  <a
    aria-label="Visit the repository"
    :href="repo.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block overflow-hidden bg-white p-5 shadow hover:bg-gray-100 sm:rounded-lg"
  >
    <div class="sm:flex sm:justify-between sm:align-top">
      <h4 class="flex text-base font-semibold sm:text-lg">
        {{ repo.name }}
      </h4>
      <span class="text-xs text-gray-500"
        >last update {{ repo.pushedAt.substr(0, 10) }}</span
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
import type { PropType } from '@vue/composition-api'
import { Repository } from '~/types/github'

export default Vue.extend({
  props: {
    repository: {
      type: Object as PropType<Repository>,
      required: true,
    },
  },
  data() {
    return { repo: this.repository }
  },
})
</script>
