<template>
  <div class="home">
    <infor-details/>
  </div>
</template>

<script lang="ts">
import InforDetails from '@/components/InforDetails.vue'
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  components:{
    InforDetails
  }
})
</script>
