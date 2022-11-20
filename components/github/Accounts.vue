<template>
  <div class="flex justify-center gap-x-10">
    <div v-for="user in users" :key="user.id">
      <a :href="user.url" target="_blank" rel="noopener noreferrer">
        <img
          :src="user.avatarUrl"
          class="mx-auto mb-1 h-14 w-14 rounded-full border object-cover hover:border-green-500 sm:h-20 sm:w-20"
        />
      </a>
      <div class="text-center text-xs sm:text-sm">{{ user.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from '@vue/composition-api'
import { User } from '~/types/github'

export default Vue.extend({
  props: {
    users: { type: Array as PropType<User[]>, required: true },
  },
})
</script>
