<template>
  <div class="bg-[#fcf0ee] py-10">
    <h1 class="text-3xl sm:text-5xl font-bold text-center py-10">
      Jun's Portfolio
    </h1>
    <div
      class="flex flex-col gap-5 min-h-screen max-w-4xl mx-auto px-1 sm:px-3"
    >
      <section>
        <h2
          class="
            text-2xl
            sm:text-3xl
            font-bold
            text-center
            border-b border-gray-500
            mt-7
            mb-4
          "
        >
          GitHub
        </h2>
        <GitHub />
      </section>
      <section>
        <h2
          class="
            text-2xl
            sm:text-3xl
            font-bold
            text-center
            border-b border-gray-500
            mt-7
            mb-4
          "
        >
          Qiita
        </h2>
        <Qiita />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import GitHub from '@/components/github/GitHub.vue'
import Qiita from '~/components/qiita/Qiita.vue'
export default defineComponent({
  components: { Qiita, GitHub },
})
</script>
