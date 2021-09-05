<!-- Please remove this file from your project -->
<template>
  <div>
    <h3 class="text-xl font-semibold text-center mt-5 mb-2">Recent Posts</h3>
    <div v-if="state.posts.length" class="w-full space-y-3">
      <div
        v-for="post in state.posts.slice(0, state.postNum)"
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
        <QiitaPost :post="post" />
      </div>
      <div class="text-center">
        <button
          v-if="state.postNum < state.posts.length"
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
import QiitaPost from '~/components/QiitaPost.vue'
import { Post } from '~/types/qiita'
import { defineComponent, reactive, onMounted } from '@vue/composition-api'
import axios from 'axios'

type State = {
  posts: Post[]
  postNum: number
}

export default defineComponent({
  components: { QiitaPost },
  setup() {
    const state = reactive<State>({
      posts: [],
      postNum: 4,
    })

    const fetchQiitaPosts = async () => {
      const res = await axios.get(
        'https://qiita.com/api/v2/authenticated_user/items',
        {
          headers: {
            Authorization: `Bearer ${process.env.QIITA_API_ACCESS_TOKEN}`,
          },
        }
      )
      state.posts = res.data
    }

    const showMore = () => {
      state.postNum += 6
    }

    onMounted(async () => {
      await fetchQiitaPosts()
    })

    return {
      state,
      showMore,
    }
  },
})
</script>
