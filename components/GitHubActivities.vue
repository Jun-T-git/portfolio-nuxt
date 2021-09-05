<template>
  <div>
    <div class="grid grid-cols-[23] grid-rows-7 grid-flow-col max-w-lg mx-auto">
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
              users[1].contributionsCollection.contributionCalendar.weeks[
                wi + 30
              ].contributionDays[di].contributionCount,
              day.contributionCount
            ),
          }"
        />
      </div>
    </div>
    <div class="flex justify-center gap-x-10 mt-2">
      <button
        v-on:click="changeUserIsVisible(ui)"
        v-for="(user, ui) in users"
        :key="user.id"
      >
        <img
          :src="user.avatarUrl"
          class="h-10 w-10 object-cover rounded-full sm:hover:opacity-70"
          :class="{ 'opacity-30': !usersIsVisible[ui] }"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-apollo'
import { PropType } from '@vue/composition-api'
import { User } from '~/types/github'

type Data = { users: User[]; usersIsVisible: Boolean[] }

export default Vue.extend({
  props: {
    userList: { type: Array as PropType<User[]>, required: true },
  },
  data: function (): Data {
    return {
      users: this.userList,
      usersIsVisible: new Array(this.userList.length).fill(true),
    }
  },
  methods: {
    orgColor: function (
      red: number = 0,
      green: number = 0,
      blue: number = 0
    ): String {
      const r =
        red != 0 && this.users.length >= 1 && this.users[0]
          ? red * 5 + 125
          : 100
      const g =
        green != 0 && this.users.length >= 2 && this.users[1]
          ? green * 5 + 125
          : 100
      const b =
        blue != 0 && this.users.length >= 3 && this.users[2]
          ? blue * 5 + 125
          : 100
      return `rgb(${r}, ${g}, ${b})`
    },
    changeUserIsVisible: function (userIndex: number): void {
      this.usersIsVisible[userIndex] = !this.usersIsVisible[userIndex]
    },
  },
})
</script>
