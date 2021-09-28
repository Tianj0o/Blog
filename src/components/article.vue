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
  color: rgb(163, 231, 231);
  max-width: 55%;
  background-color: darkslategray;
  padding: 30px 30px;
}
code {
  padding: 20px;
  display: flex;
  background-color: rgb(216, 160, 156);
  color: darkslategray;
  font-size: 1.5rem !important;
}
</style>