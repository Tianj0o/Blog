<template>
  <div class="root">
    <div class="header">
      <p @click="handleTitleClick" class="title">Blog</p>
    </div>
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="footer">
      <div>i am footer</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const handleTitleClick = () => {

      if (route.path !== '/') {
        router.push('/')
      }
    }

    return {
      handleTitleClick
    }
  }
})
</script>
<style lang="less">
.header {
  display: flex;
  justify-content: flex-end;
  .title {
    font-size: 2rem;
    font-weight: 800;
    width: 10rem;
    color: cornsilk;
  }
}
@media screen and (max-width: 750px) {
  .root {
    background: url("./assets/bg/bg2.jpg") no-repeat fixed;
  }
}
@media screen and (min-width: 750px) {
  .root {
    background: url("./assets/bg/bg1.png") no-repeat fixed;
  }
}
.container {
  font-family: Caskaydia;
  flex: 1;
}
.to-post-leave-to {
  transform: translateX(-100%);
}
.to-post-leave-active {
  transition: all 0.5s;
}
.to-home-leave-to {
  transform: translateY(100%);
}
.to-home-leave-active {
  transition: all 0.5s;
}
.footer {
  text-align: center;
}
.root {
  // background: url("./assets/bg/bg1.png") no-repeat fixed;
  opacity: 1;
  min-height: 100vh;
  background-size: cover;
  max-width: 100vw;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #747474;
}
::-webkit-scrollbar-corner {
  background: #f6f6f6;
}
</style>
