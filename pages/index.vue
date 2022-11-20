<template>
  <div class="bg-[#fcf0ee]">
    <main class="py-10">
      <h1
        class="py-10 text-center text-4xl font-bold tracking-widest sm:text-5xl"
      >
        Jun-T
        <p class="pt-3 text-base sm:text-lg">
          Software Engineer in Hiroshima, Japan.
        </p>
      </h1>
      <div
        class="mx-auto flex min-h-screen max-w-4xl flex-col gap-5 px-1 sm:px-3"
      >
        <div v-if="users && users.length > 0">
          <github-accounts :users="users" />
          <github-contributions :users="users" class="my-5" />
        </div>

        <section>
          <heading-2>Skills</heading-2>
          <skills class="pt-5" />
        </section>

        <section>
          <heading-2>Activities</heading-2>
          <heading-3>GitHub</heading-3>
          <github-repositories :users="users" class="mb-10" />
          <heading-3>Qiita</heading-3>
          <qiita-posts />
        </section>
      </div>
    </main>
    <footer class="py-2 text-center text-sm text-gray-500">
      &copy; 2021 Jun-T. All Rights Reserved.
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-apollo'
import GithubContributions from '~/components/github/Contributions.vue'
import githubUser from '~/apollo/queries/githubUser.gql'
import { User } from '~/types/github'
import GithubAccounts from '~/components/github/Accounts.vue'
import Skills from '~/components/skill/Skills.vue'
import GithubRepositories from '~/components/github/Repositories.vue'
import QiitaPosts from '~/components/qiita/Posts.vue'
import Heading2 from '~/components/text/heading2.vue'
import Heading3 from '~/components/text/heading3.vue'
Vue.config.devtools = true

type Data = {
  user1: User | null
  user2: User | null
}
type Response = { user: User }

export default Vue.extend({
  components: {
    GithubContributions,
    GithubAccounts,
    Skills,
    GithubRepositories,
    QiitaPosts,
    Heading2,
    Heading3,
  },
  data: (): Data => ({
    user1: null,
    user2: null,
  }),
  head() {
    return { title: 'Jun-T' }
  },
  computed: {
    users(): Array<User | null> {
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
