<template>
  <a
    aria-label="Visit the post"
    :href="props.post.url"
    target="_blank"
    rel="noopener noreferrer"
    class="block overflow-hidden bg-white p-5 shadow hover:bg-gray-100 sm:rounded-lg"
  >
    <div class="sm:flex sm:justify-between sm:align-top">
      <h4 class="text-base font-semibold">
        {{ props.post.title }}
      </h4>
      <span class="text-xs text-gray-500">{{
        props.post.created_at.substr(0, 10)
      }}</span>
    </div>
    <div class="mt-2 sm:flex sm:justify-between">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in props.post.tags"
          :key="tag.name"
          class="rounded bg-blue-200 px-2 py-0.5 text-xs sm:text-sm"
        >
          {{ tag.name }}
        </span>
      </div>
      <span
        class="flex w-24 items-center justify-end gap-x-1 px-2 py-0.5 text-xs text-gray-600 sm:text-sm"
      >
        <img src="/activities/heart.png" alt="lgtm" width="16" height="16" />
        <span>{{ props.post.likes_count }}</span>
      </span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'
import { Post } from '~/types/qiita'

type Props = {
  post: Post
}

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },

  setup(props: Props) {
    return {
      props,
    }
  },
})
</script>
