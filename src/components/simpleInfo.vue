<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    createAt: {
      type: String,
      default: '2021/9/22'
    }
  },

})

</script>

<template>
  <div class="simpleInfo">
    <div class="title">{{ title }}</div>
    <div class="createTime">
      <span>{{ createAt }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.simpleInfo {
  padding: 10px 10px;
  margin: 10px 0px;
  width: 50%;
  opacity: 0.7;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
  .title {
    margin: 5px 0px;
    font-size: 1.3rem;
  }
  .createTime {
    opacity: 0.7;
    font-size: 0.8rem;
  }
}
</style>
