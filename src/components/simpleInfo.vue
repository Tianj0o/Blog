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
  }
})

</script>

<template>
  <div class="simpleInfo">
    <div class="title">{{ title }}</div>
    <div class="createTime">
      <span>createAt:{{ createAt }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.simpleInfo {
  width: 70%;
  background-color: pink;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  margin: 20px 0;
  .title {
    font-size: xx-large;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .createTime {
    width: 100%;
    text-align: end;
  }
}
</style>
