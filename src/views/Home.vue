<template>
  <div class="home">
    <div class="container">
      <article-info></article-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
import articleInfo from '@/views/ArticleInfo.vue'
export default defineComponent({
  components: {
    articleInfo
  },
  setup() {
    const article = reactive({
      title: '',
      createAt: '',
      body: ''
    })

    const store = useStore()
    store.dispatch('getAllTitles')

    return {
      article,

    }
  }
})
</script>

<style lang="less">
.home {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .lists {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 60%;
      .articles {
        width: 80%;
      }
    }
  }
}
</style>
