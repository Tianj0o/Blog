<template>
 <div id="InforDetails">
   <div class="continer">
     <img src="../assets/avatar.jpg" alt="个人头像">
   </div>
 </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";



export default defineComponent({
  
})
</script>

<style>

.continer {
  height: 25rem;
  width:12rem;
  background-color: aqua;
}
.continer img{
  height: auto;
  width:50%;
  border-radius: 50%;
}
</style>