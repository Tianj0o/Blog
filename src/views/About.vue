<template>
  <div class="AboutMe">
    <p style="font-size: 2rem;">About Me</p>
    <div class="main">
      <div>大三学生</div>
      <div>热爱前端</div>
      <div>很菜的吉他指弹爱好者</div>
    </div>
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
  .main {
    font-size: 1.5rem;
    margin: 0 auto;
    div {
      margin: 10px 0;
    }
  }
}
@media screen and (max-width: 750px) {
  .AboutMe {
    color: rgb(97, 235, 200);
  }
}
@media screen and (min-width: 750px) {
  .AboutMe {
    color: black;
  }
}
</style>