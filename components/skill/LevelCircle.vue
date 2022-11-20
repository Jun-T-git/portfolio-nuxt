<template>
  <div
    class="z-0 h-28 w-28 -rotate-45 rounded-full border-8 border-gray-400"
    @mouseenter="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <div
      class="will-change-transform z-10 h-28 w-28 -translate-x-2 -translate-y-2 rounded-full border-8 border-[#00000000] border-r-green-500 border-b-green-500 transition-transform delay-[0ms] duration-1000 hover:rotate-[360deg] hover:delay-150"
      :style="{
        borderRightColor: color,
        borderBottomColor: color,
      }"
    >
      <div
        :class="`will-change-transform z-20 h-28 w-28 rounded-full border-8 border-[#00000000] border-r-gray-400 border-b-gray-400`"
        :style="{
          transform: isMouseOver
            ? `translateX(-0.5rem) translateY(-0.5rem) rotate(${
                degrees.bg + 360
              }deg)`
            : `translateX(-0.5rem) translateY(-0.5rem) rotate(${degrees.bg}deg)`,
          transitionDuration: '1000ms',
          transitionDelay: isMouseOver ? '150ms' : '0ms',
        }"
      >
        <div
          :class="`z-30 h-28 w-28 rounded-full border-8 border-[#00000000] border-r-green-500`"
          :style="{
            transform: `translateX(-0.5rem) translateY(-0.5rem) rotate(${degrees.filled1}deg)`,
            borderRightColor: color,
          }"
        >
          <div
            :class="`z-40 h-28 w-28 rounded-full border-8 border-[#00000000] border-r-green-500`"
            :style="{
              transform: `translateX(-0.5rem) translateY(-0.5rem) rotate(${degrees.filled2}deg)`,
              borderRightColor: color,
            }"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = { isMouseOver: Boolean }

export default Vue.extend({
  props: {
    degree: { type: Number, required: true },
    color: { type: String, required: true },
  },
  data(): Data {
    return {
      isMouseOver: false,
    }
  },
  computed: {
    degrees(): Object {
      let degreeBg = 90
      let degreeFilled1 = -90
      let degreeFilled2 = 0
      if (this.degree > 90) {
        const diff = Math.max(Math.min(this.degree - 90, 90), 0)
        degreeBg += diff
        degreeFilled1 += (Math.max(this.degree - 90, 0) - diff) / 2
        degreeFilled2 += (Math.max(this.degree - 90, 0) - diff) / 2
      }
      return { bg: degreeBg, filled1: degreeFilled1, filled2: degreeFilled2 }
    },
  },
})
</script>
