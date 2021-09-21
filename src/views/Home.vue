<template>
  <div class="home">
    <div class="container">
      <div style="border: black 1px solid;" @click="handleSentClick">{{ article.title }}</div>
      <t-article :article="article.body"></t-article>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, reactive } from "@vue/runtime-core";
import axios from 'axios'
import TArticle from '../components/article.vue'
export default defineComponent({
  components: {
    TArticle
  },
  setup() {
    const article = reactive({
      title: '',
      createAt: '',
      body: ''
    })
    axios.get('/api').then((res) => {
      // console.log(res.data)
      article.title = res.data.title
      article.createAt = res.data.createTime,
        article.body = res.data.articleBody
    })

    const handleSentClick = () => {
      router.push(`/post/${article.title}`)
    }

    return {
      article,
      handleSentClick
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
