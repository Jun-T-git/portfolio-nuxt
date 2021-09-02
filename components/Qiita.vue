<!-- Please remove this file from your project -->
<template>
  <div>
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">Recent Posts</h3>
    <div v-if="state.posts.length" class="w-full space-y-3">
      <div
        v-for="post in state.posts.slice(0, nbPosts)"
        :key="post.id"
        class="
          bg-white
          overflow-hidden
          shadow
          sm:rounded-lg
          p-5
          hover:opacity-70
        "
      >
        <a :href="post.url" target="_blank" rel="noopener noreferrer">
          <div class="sm:flex sm:justify-between sm:align-top">
            <h4 class="text-base sm:text-lg font-semibold">
              {{ post.title }}
            </h4>
            <span class="text-xs text-gray-500">{{
              post.created_at.substr(0, 10)
            }}</span>
          </div>
          <div class="sm:flex sm:justify-between mt-2">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
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
              {{ post.likes_count }} LGTM
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '~/types/qiita'
import {
  defineComponent,
  reactive,
  onMounted,
  computed,
} from '@vue/composition-api'
import axios from 'axios'

type State = {
  posts: Post[]
}

type Props = {
  postNum: number
}

export default defineComponent({
  props: {
    postNum: {
      default: 4,
      required: false,
    },
  },

  setup(props: Props) {
    const state = reactive<State>({
      posts: [],
    })

    const nbPosts = computed(() => Math.min(props.postNum, state.posts.length))

    const fetchQiitaPosts = async () => {
      const res = await axios.get(
        'https://qiita.com/api/v2/authenticated_user/items',
        {
          headers: {
            Authorization: `Bearer ${process.env.QIITA_API_ACCESS_TOKEN}`,
          },
        }
      )
      console.log(res)
      state.posts = res.data
    }

    onMounted(async () => {
      await fetchQiitaPosts()
    })

    return {
      state,
      nbPosts,
      fetchQiitaPosts,
    }
  },
})
</script>
