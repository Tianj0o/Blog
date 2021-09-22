<template>
  <div class="header">
    <p class="title">Blog</p>
  </div>
  <div class="container">
    <router-view />
  </div>
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
.container {
  font-family: Caskaydia;
}
</style>
