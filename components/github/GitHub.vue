<template>
  <div v-if="user1 && user2">
    <h3 class="text-xl font-semibold text-center my-2">Accounts</h3>
    <div class="flex justify-center gap-x-10">
      <div v-for="user in users" :key="user.id">
        <a :href="user.url" target="_blank" rel="noopener noreferrer">
          <img
            :src="user.avatarUrl"
            class="
              h-14
              w-14
              sm:h-20 sm:w-20
              object-cover
              rounded-full
              mx-auto
              mb-1
            "
          />
        </a>
        <div class="text-center text-xs sm:text-sm">{{ user.name }}</div>
      </div>
    </div>
    <div class="my-5">
      <h3 class="text-xl font-semibold text-center mt-5 mb-2">
        Recent Activities
      </h3>
      <git-hub-activities :user-list="users" />
    </div>
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">Repositories</h3>
    <div class="w-full space-y-3">
      <git-hub-repository
        v-for="repo in users[0].repositories.nodes.slice(0, repoNum)"
        :key="repo.id"
        :repository="repo"
      />
      <div class="text-center">
        <button
          v-if="repoNum < users[0].repositories.nodes.length"
          class="text-blue-500 text-sm"
          @click="showMore()"
        >
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-apollo'
import GitHubActivities from './GitHubActivities.vue'
import GitHubRepository from './GitHubRepository.vue'
import githubUser from '~/apollo/queries/githubUser.gql'
import { User } from '~/types/github'

type Data = {
  user1: User | null
  user2: User | null
  repoNum: number
}
type Response = { user: User }

export default Vue.extend({
  components: { GitHubActivities, GitHubRepository },
  data: (): Data => ({
    user1: null,
    user2: null,
    repoNum: 4,
  }),
  computed: {
    users(): Array<User | null> {
      return [this.user1, this.user2]
    },
  },
  methods: {
    showMore(): void {
      this.repoNum += 6
    },
  },
  apollo: {
    user1: {
      prefetch: true,
      query: githubUser,
      variables: {
        userName: 'Jun-T-git',
      },
      update: (data: Response) => data.user,
    },
    user2: {
      prefetch: true,
      query: githubUser,
      variables: {
        userName: 'JunTeraoka',
      },
      update: (data: Response) => data.user,
    },
  },
})
</script>
