<template>
  <div class="root">
    <div class="header">
      <p class="title">Blog</p>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="footer">
      <div>i am footer</div>
    </div>
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
    color: cornsilk;
  }
}
.container {
  font-family: Caskaydia;
  flex: 1;
}

.footer {
  text-align: center;
}
.root {
  background: url("./assets/bg/bg1.png") no-repeat fixed;
  opacity: 1;
  min-height: 100vh;
  background-size: 100%;
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
