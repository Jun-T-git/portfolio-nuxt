<template>
  <a
    :href="props.post.url"
    target="_blank"
    rel="noopener noreferrer"
    class="
      bg-white
      overflow-hidden
      shadow
      sm:rounded-lg
      p-5
      hover:opacity-70
      block
    "
  >
    <div class="sm:flex sm:justify-between sm:align-top">
      <h4 class="text-base sm:text-lg font-semibold">
        {{ props.post.title }}
      </h4>
      <span class="text-xs text-gray-500">{{
        props.post.created_at.substr(0, 10)
      }}</span>
    </div>
    <div class="sm:flex sm:justify-between mt-2">
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
        class="
          rounded
          bg-green-500
          text-white text-center
          w-24
          px-2
          py-0.5
          text-xs
          sm:text-sm
        "
      >
        {{ props.post.likes_count }} LGTM
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
