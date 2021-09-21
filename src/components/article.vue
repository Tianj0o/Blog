<template>
  <div class="article">
    <div class="articleBody" v-html="article"></div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    article: {
      type: String,
      required: true
    }
  },
})


</script>
<style lang="less">
.article {
  max-width: 50%;
}
</style>