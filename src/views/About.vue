<template>
  <div class="AboutMe">
    <p style="font-size: 2rem;padding: 20px;">About Me</p>
    <div class="main">
      <div>大三学生</div>
      <div>热爱前端、后端</div>
      <div>无聊的人</div>
      <div>很菜的吉他指弹爱好者</div>
      <div>.......</div>
    </div>
    <p class="motto">总之岁月漫长，然而值得等待</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>

<style scoped lang="less">
.AboutMe {
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 100vw;
  .main {
    font-size: 1.5rem;
    opacity: 0.7;
    margin: 30px auto;
    width: 50%;

    div {
      margin: 10px 0;
    }
  }
  .motto {
    opacity: 0.7;
    font-weight: 800;
    font-style: italic;
    padding: 20px;
  }
}
</style>