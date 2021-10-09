<template>
  <div class="root">
    <div class="header">
      <p class="motto">Just Do It</p>
      <p @click="handleTitleClick" class="title">Blog</p>
      <router-link custom v-slot="{ navigate }" to="/about">
        <p @click="navigate">About</p>
      </router-link>
    </div>
    <div class="container">
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" :name="route.meta.transition">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <div class="footer">
      <div>
        <a
          style="text-decoration: none;"
          href="https://beian.miit.gov.cn/#/Integrated/index"
        >皖ICP备2021005516号-1</a>
      </div>
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
.root {
  opacity: 1;
  min-height: 100vh;
  max-width: 100vw;

  font-family: Caskaydia;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    padding: 0 20px;
    .title {
      font-size: 1.2rem;
      font-weight: 800;
      color: black;
    }
    .motto {
      min-width: 60%;
    }
  }
  .container {
    font-family: Caskaydia;
    flex: 1;
    min-height: 80vh;
    padding: 30px 0;
  }
  .footer {
    text-align: center;
    position: relative;
    // bottom: 10px;
    color: whitesmoke;
  }
}
.to-post-leave-to {
  transform: translateX(-100%);
}
.to-post-leave-active {
  transition: all 0.3s;
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
