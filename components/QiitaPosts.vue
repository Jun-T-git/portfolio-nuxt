<!-- Please remove this file from your project -->
<template>
  <div v-if="posts.length" class="w-full space-y-3">
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white overflow-hidden shadow sm:rounded-lg p-5 hover:opacity-70"
    >
      <a :href="post.url" target="_blank" rel="noopener noreferrer">
        <div class="sm:flex sm:justify-between sm:align-top">
          <h3 class="text-base sm:text-lg font-semibold">
            {{ post.title }}
          </h3>
          <span class="text-xs text-gray-500">{{
            post.created_at.substr(0, 10)
          }}</span>
        </div>
        <div class="sm:flex sm:justify-between mt-2">
          <div class="flex flex-wrap gap-2">
            <div
              v-for="tag in post.tags"
              :key="tag.name"
              class="rounded bg-blue-200 px-2 py-0.5 text-xs sm:text-sm"
            >
              {{ tag.name }}
            </div>
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
            {{ post.likes_count }} LGTM
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '~/types/qiita'
import { computed, defineComponent, reactive } from '@vue/composition-api'

type Props = {
  qiitaPosts: Post[]
}

export default defineComponent({
  props: {
    qiitaPosts: {
      default: [],
      required: true,
    },
  },
  setup(props: Props) {
    const posts = computed(() => props.qiitaPosts)
    return { posts }
  },
})
</script>
