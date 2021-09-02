<template>
  <div>
    <!-- <h3 class="text-xl font-semibold text-center my-2">Account</h3>
    <div v-if="Object.keys(viewer).length" class="w-full space-y-3">
      <div class="bg-white">{{ viewer.name }}</div>
      <img :src="viewer.avaterUrl" />
    </div> -->
    <h3 class="text-xl font-semibold text-center my-2">Activity</h3>
    <h3 class="text-xl font-semibold text-center my-2">Recent Repositories</h3>
    <div v-if="Object.keys(viewer).length" class="w-full space-y-3">
      <div
        v-for="repo in viewer.repositories.nodes"
        :key="repo.id"
        class="
          bg-white
          overflow-hidden
          shadow
          sm:rounded-lg
          p-5
          hover:opacity-70
        "
      >
        <a :href="repo.url" target="_blank" rel="noopener noreferrer">
          <div class="sm:flex sm:justify-between sm:align-top">
            <h3 class="text-base sm:text-lg font-semibold">
              {{ repo.name }}
            </h3>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue-apollo'
import githubViewer from '~/apollo/queries/githubViewer.gql'

export default {
  data: () => ({
    viewer: {},
  }),
  apollo: {
    viewer: {
      prefetch: false,
      query: githubViewer,
    },
  },
}
</script>
