<template>
  <div v-if="users && users.length > 0">
    <div class="grid-rows-7 mx-auto grid max-w-lg grid-flow-col grid-cols-[23]">
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
          class="row-span-1 min-h-[15px] rounded border border-[#fcf0ee] sm:min-h-[20px]"
          :style="{
            'background-color': orgColor(
              users[1].contributionsCollection.contributionCalendar.weeks[
                wi + 30
              ].contributionDays[di].contributionCount,
              day.contributionCount
            ),
          }"
        />
      </div>
    </div>
    <div
      class="mx-auto mt-2 flex max-w-lg items-center justify-end gap-x-7 px-1"
    >
      <span class="text-gray-400">Toggle Me!</span>
      <div class="flex items-center gap-x-8">
        <button
          v-for="(user, ui) in users"
          :id="`toggleIsVisible${ui}`"
          :key="user.id"
          class="flex items-center"
          @click="changeUserIsVisible(ui)"
        >
          <div
            class="h-3 w-10 rounded-lg border border-gray-300"
            :class="{
              'bg-gray-400': !usersIsVisible[ui],
              'bg-[#aaffaa]': usersIsVisible[ui] && ui == 0,
              'bg-[#ffaa55]': usersIsVisible[ui] && ui == 1,
            }"
          />
          <img
            :src="user.avatarUrl"
            class="will-change-transform -ml-5 h-10 w-10 rounded-full border object-cover shadow-lg transition"
            :class="{ '-translate-x-10': !usersIsVisible[ui] }"
            alt="avatar"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from '@vue/composition-api'
import { User } from '~/types/github'

type Data = { usersIsVisible: Boolean[] }

export default Vue.extend({
  props: {
    users: { type: Array as PropType<User[]>, required: true },
  },
  data(): Data {
    return {
      usersIsVisible: new Array(this.users?.length).fill(true),
    }
  },
  methods: {
    orgColor(red: number = 0, green: number = 0, blue: number = 0): String {
      const r =
        red !== 0 && this.users.length >= 1 && this.usersIsVisible[1]
          ? red * 5 + 20
          : 0
      const g =
        green !== 0 && this.users.length >= 2 && this.usersIsVisible[0]
          ? green * 5 + 20
          : 0
      const b =
        blue !== 0 && this.users.length >= 3 && this.usersIsVisible[2]
          ? blue * 5 + 20
          : 0
      return `rgb(${190 + r - g - b}, ${190 + g - b - r}, ${190 + b - r - g})`
    },
    changeUserIsVisible(userIndex: number): void {
      const newUsersIsVisible = this.usersIsVisible.slice(
        0,
        this.usersIsVisible.length
      )
      newUsersIsVisible[userIndex] = !newUsersIsVisible[userIndex]
      this.usersIsVisible = newUsersIsVisible
    },
  },
})
</script>
