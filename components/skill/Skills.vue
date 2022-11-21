<template>
  <div>
    <ul
      class="mb-8 grid grid-cols-2 justify-center gap-y-10 text-lg sm:grid-cols-4"
    >
      <li v-for="skill in mainSkills" :key="skill.name">
        <skill
          :name="skill.name"
          :degree="skill.degree"
          :src="skill.src"
          :color="skill.color"
        />
      </li>
    </ul>
    <ul
      class="my-5 flex flex-wrap gap-x-5 gap-y-1 border-4 border-dotted border-gray-400 py-5 px-5"
    >
      <li v-for="skill in subSkills" :key="skill.name" class="text-gray-700">
        {{ skill.name }}
      </li>
      <span class="text-gray-500">etc...</span>
    </ul>
    <div class="flex items-center justify-end gap-x-5 px-2">
      <div class="flex items-center gap-x-1.5">
        <span
          class="block h-2.5 w-8"
          :style="{ backgroundColor: COLORS.WORK_EXPERIENCE }"
        />
        <span>Work Experience</span>
      </div>
      <div class="flex items-center gap-x-1.5">
        <span
          class="block h-2.5 w-8"
          :style="{ backgroundColor: COLORS.HOBBY }"
        />
        <span>Hobby</span>
      </div>
    </div>
    <span class="flex justify-end px-2 pt-2 text-xs text-gray-500"
      >icons by
      <a target="_blank" class="pl-1" href="https://icons8.com">Icons8</a></span
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Skill from './SkillCircle.vue'

export default Vue.extend({
  components: { Skill },
  data() {
    const COLOR_WORK_EXPERIENCE = '#00cc00'
    const COLOR_HOBBY = '#ff8833'
    return {
      COLORS: { WORK_EXPERIENCE: COLOR_WORK_EXPERIENCE, HOBBY: COLOR_HOBBY },
      mainSkills: [
        {
          name: 'TypeScript',
          src: '/skills/typescript.png',
          degree: 360,
          color: COLOR_WORK_EXPERIENCE,
        },
        {
          name: 'React / Next.js',
          src: '/skills/react.png',
          degree: 360,
          color: COLOR_WORK_EXPERIENCE,
        },
        {
          name: 'Vue.js / Nuxt.js',
          src: '/skills/vuejs.png',
          degree: 280,
          color: COLOR_WORK_EXPERIENCE,
        },
        {
          name: 'Laravel',
          src: '/skills/laravel.png',
          degree: 240,
          color: COLOR_WORK_EXPERIENCE,
        },
        {
          name: 'Data Science',
          src: '/skills/datascience.png',
          degree: 270,
          color: COLOR_HOBBY,
        },
        {
          name: 'Node.js',
          src: '/skills/nodejs.png',
          degree: 200,
          color: COLOR_HOBBY,
        },
        {
          name: 'Ruby on Rails',
          src: '/skills/rails.png',
          degree: 120,
          color: COLOR_HOBBY,
        },
        {
          name: 'Spring Boot',
          src: '/skills/java.png',
          degree: 120,
          color: COLOR_HOBBY,
        },
      ],
      subSkills: [
        { name: 'Python' },
        { name: 'Express' },
        { name: 'Nest.js' },
        { name: 'Tailwindcss' },
        { name: 'MySQL' },
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Firebase' },
        { name: 'Vercel' },
        { name: 'WordPress' },
        { name: 'Unity' },
      ],
    }
  },
})
</script>
