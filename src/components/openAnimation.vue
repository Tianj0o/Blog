<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({

})
</script>

<template>
  <div class="open-animation"></div>
</template>


<style scoped lang="less">
.open-animation {
  top: 0;
  // height: 100%;
  // width: 100%;
  position: absolute;
  background-color: white;
  z-index: 1000;
  overflow: hidden;
}
</style>