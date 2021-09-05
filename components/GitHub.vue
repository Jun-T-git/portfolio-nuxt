<template>
  <div>
    <h3 class="text-xl font-semibold text-center my-2">Accounts</h3>
    <div v-if="user1 && user2" class="flex justify-center gap-x-10">
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
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">Activities</h3>
    <div v-if="user1 && user2">
      <GitHubActivities :userList="users" />
    </div>
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">
      Recent Repositories
    </h3>
    <div v-if="user1 && user2" class="w-full space-y-3">
      <div
        v-for="repo in users[0].repositories.nodes.slice(0, repoNum)"
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
        <GitHubRepository :repository="repo" />
      </div>
      <div class="text-center">
        <button
          v-if="repoNum < users[0].repositories.nodes.length"
          v-on:click="showMore()"
          class="text-blue-500 text-sm"
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
import githubUser from '~/apollo/queries/githubUser.gql'
import { User } from '~/types/github'

type Data = {
  user1: User | null
  user2: User | null
  repoNum: number
}
type Response = { user: User }

export default Vue.extend({
  data: (): Data => ({
    user1: null,
    user2: null,
    repoNum: 4,
  }),
  methods: {
    showMore: function (): void {
      this.repoNum += 6
    },
  },
  computed: {
    users: function (): Array<User | null> {
      return [this.user1, this.user2]
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
