<template>
  <div class="header">
    <p class="title">Blog</p>
  </div>
  <router-view />
</template>

<style lang="less">
.header {
  display: flex;
  justify-content: flex-end;
  .title {
    font-size: 2rem;
    font-weight: 800;
    width: 10rem;
  }
}
</style>
