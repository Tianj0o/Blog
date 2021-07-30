<template>
  <div id="InforDetails">
    <div class="continer">
      <img class="avatar" src="../assets/avatar.jpg" alt="个人头像" />
      <div>
        <span>一个无聊的人</span>
        <p>代码、电影、吉他、乒乓球</p>
      </div>
      <p>{{sentence.content}}</p>
    </div>
  </div>
</template>
<script>

import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import axios from 'axios'
export default defineComponent({
setup(){
  const sentence = reactive({
    content:String,
    origin:String
  })
  onMounted(()=>{
    axios.get('https://api.xygeng.cn/one').then((res)=>{
      sentence.content = res.data.data.content
      console.log(sentence.content)
    })
  
  })
  return {
    sentence
  }
}
});
</script>

<style>
.continer {
  height: 25rem;
  width: 12rem;
  background-color: aqua;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.continer img {
  height: auto;
  width: 50%;
  border-radius: 50%;
  transition: width 1.5s;
  transition: transform 1.5s;
}
.avatar:hover {
  height: auto;
  width: 60%;
  transform: rotate(720deg);
}
</style>