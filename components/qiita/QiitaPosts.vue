<!-- Please remove this file from your project -->
<template>
  <div v-if="state.posts.length" class="w-full space-y-3">
    <ul class="space-y-3">
      <template v-for="post in state.posts.slice(0, state.postNum)">
        <li v-if="!post.private" :key="post.id">
          <QiitaPost :post="post" />
        </li>
      </template>
    </ul>
    <div class="text-center">
      <button
        v-if="state.postNum < state.posts.length"
        class="text-sm text-blue-500"
        @click="showMore()"
      >
        Show More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api'
import axios from 'axios'
import QiitaPost from '~/components/qiita/QiitaPost.vue'
import { Post } from '~/types/qiita'

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
