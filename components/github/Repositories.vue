<template>
  <div v-if="users && users.length > 0" class="w-full space-y-3">
    <ul class="space-y-3">
      <template v-for="repo in users[0].repositories.nodes.slice(0, repoNum)">
        <li v-if="!repo.isPrivate" :key="repo.id">
          <github-repository :repository="repo" />
        </li>
      </template>
    </ul>
    <div class="text-center">
      <button
        v-if="repoNum < users[0].repositories.nodes.length"
        id="showMoreRepositories"
        class="border-b border-dashed border-gray-600 text-sm text-gray-600 hover:border-green-600 hover:text-green-600"
        @click="showMore()"
      >
        Show More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-apollo'
import type { PropType } from '@vue/composition-api'
import GithubRepository from './Repository.vue'
import { User } from '~/types/github'

type Data = {
  repoNum: number
}

export default Vue.extend({
  components: { GithubRepository },
  props: {
    users: { type: Array as PropType<User[]>, required: true },
  },
  data: (): Data => ({
    repoNum: 4,
  }),
  methods: {
    showMore(): void {
      this.repoNum += 6
    },
  },
})
</script>
