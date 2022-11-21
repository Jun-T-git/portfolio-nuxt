<template>
  <div class="relative overflow-hidden border bg-white p-5 pb-14 sm:rounded-lg">
    <div class="flex justify-between align-top">
      <h4 class="text-base font-semibold sm:text-lg">{{ work.name }}</h4>
      <span class="text-xs text-gray-500">{{ work.createdAt }}</span>
    </div>
    <p class="py-1 text-sm text-gray-700">
      {{ work.description }}
    </p>
    <div class="flex flex-wrap gap-2 pt-2">
      <span
        v-for="tag in work.tags"
        :key="`${work.name}-${tag}`"
        class="rounded bg-blue-200 px-2 py-0.5 text-xs sm:text-sm"
      >
        {{ tag }}
      </span>
    </div>
    <div class="absolute bottom-5 flex flex-wrap gap-5 pt-2 text-gray-600">
      <a
        class="flex items-center gap-x-1 border-b border-dashed border-gray-600 text-xs hover:text-green-600"
        :href="work.url"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="/works/website.png"
          height="16"
          width="16"
          alt="visit website"
        />Visit Website</a
      >
      <a
        class="flex items-center gap-x-1 border-b border-dashed border-gray-600 text-xs hover:text-green-600"
        :href="work.github"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="/works/github.png"
          height="20"
          width="20"
          alt="view source"
        />View Source</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from '@vue/composition-api'
import { Work } from '~/types/work'

export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<Work>,
      required: true,
    },
  },
})
</script>
