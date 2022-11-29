<template>
  <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <li v-for="work in works" :key="work.name">
      <work-card :work="work" class="h-full" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-apollo'
import WorkCard from './WorkCard.vue'
import { Work } from '~/types/work'

type Data = {
  works: Array<Work>
}

export default Vue.extend({
  components: { WorkCard },
  data: (): Data => ({
    works: [
      {
        name: 'COM.PY',
        description:
          '組織内の繋がりを日本地図上で可視化し交流を促進するアプリ（スマートフォン推奨）',
        url: 'https://compy.vercel.app/',
        tags: [
          'Next.js',
          'TypeScript',
          'UI/UX Design',
          'Hackathon',
          'Team Dev.',
        ],
        createdAt: '2022-07',
        github: 'https://github.com/Jun-T-git/HackU.client',
      },
      {
        name: "Today's Best9",
        description:
          'その日行われたNPBの試合を集計しベストナインを自動投稿するTwitterBot',
        url: 'https://twitter.com/todaysbest9',
        tags: [
          'Python',
          'AWS Lambda',
          'TwitterAPI',
          'Scraping',
          'Personal Dev.',
        ],
        createdAt: '2021-09',
        github: 'https://github.com/Jun-T-git/todays-best9',
      },
      {
        name: 'SLive',
        description:
          '視聴者のコメントが発表者の画面上にリアルタイムに表示されるプレゼンテーション補助ツール',
        url: 'https://slive-xi.vercel.app/',
        tags: ['Next.js', 'TypeScript', 'UI/UX Design', 'Personal Dev.'],
        createdAt: '2021-08',
        github: 'https://github.com/Jun-T-git/slive',
      },
      {
        name: 'SOMeL',
        description:
          '機械学習手法のひとつであるSOM（自己組織化マップ）を直感的に理解するためのデモサイト（PC推奨）',
        url: 'https://jun-t-git.github.io/somel/',
        tags: ['JavaScript', 'Machine Learning', 'SOM', 'Personal Dev.'],
        createdAt: '2019-11',
        github: 'https://github.com/Jun-T-git/somel',
      },
    ],
  }),
})
</script>
