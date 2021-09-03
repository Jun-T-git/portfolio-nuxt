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
      <div
        class="grid grid-cols-[23] grid-rows-7 grid-flow-col max-w-lg mx-auto"
      >
        <div
          v-for="(
            week, wi
          ) in users[0].contributionsCollection.contributionCalendar.weeks.slice(
            30,
            users[0].contributionsCollection.contributionCalendar.weeks.length
          )"
          :key="week.firstDay"
          class="col-span-1"
        >
          <div
            v-for="(day, di) in week.contributionDays"
            :key="day.date"
            class="row-span-1 border min-h-[15px] sm:min-h-[20px] rounded"
            :style="{
              'background-color': orgColor(
                day.contributionCount,
                users[1].contributionsCollection.contributionCalendar.weeks[
                  wi + 30
                ].contributionDays[di].contributionCount
              ),
            }"
          ></div>
        </div>
      </div>
      <div class="flex justify-center gap-x-10 mt-2">
        <button v-on:click="changeUserIsVisible(1)">
          <img
            :src="user1.avatarUrl"
            class="h-10 w-10 object-cover rounded-full hover:opacity-70"
            :class="{ 'opacity-40': !user1IsVisible }"
          />
        </button>
        <button v-on:click="changeUserIsVisible(2)">
          <img
            :src="user2.avatarUrl"
            class="h-10 w-10 object-cover rounded-full hover:opacity-70"
            :class="{ 'opacity-40': !user2IsVisible }"
          />
        </button>
      </div>
    </div>
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">
      Recent Repositories
    </h3>
    <div v-if="user1 && user2" class="w-full space-y-3">
      <div
        v-for="repo in users[0].repositories.nodes"
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
  user1IsVisible: boolean
  user2IsVisible: boolean
}
type Response = { user: User }

export default Vue.extend({
  data: (): Data => ({
    user1: null,
    user2: null,
    user1IsVisible: true,
    user2IsVisible: true,
  }),
  methods: {
    orgColor: function (green: number, red: number): String {
      const g = green != 0 && this.user1IsVisible ? green * 5 + 125 : 100
      const r = red != 0 && this.user2IsVisible ? red * 5 + 125 : 100
      return `rgb(${r},${g}, 100)`
    },
    changeUserIsVisible: function (userNum: number): void {
      if (userNum == 1) {
        this.user1IsVisible = !this.user1IsVisible
      } else if (userNum == 2) {
        this.user2IsVisible = !this.user2IsVisible
      }
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
