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
<style>
.article {
  color: black;
  max-width: 100%;
}
code {
  padding: 20px;
  display: flex;
  background-color: rgb(33, 40, 54);
  color: rgb(231, 101, 114);
  font-size: 1rem !important;
  font-family: Caskaydia;
  overflow-x: scroll;
}
li {
  list-style: none;
}
</style>