<template>
  <div class="posts">
    <div class="header">
      <h1>{{ article.title }}</h1>
      <span class="time">{{ article.createAt }}</span>
    </div>
    <t-article :article="article.body"></t-article>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import TArticle from '../components/article.vue'
import getArticle from '@/request/getArticle'
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
    const route = useRoute()
    console.log(route.params.title)

    getArticle(route.params.title as string).then((res: any) => {
      console.log(res.data)
      article.body = res.data.articleBody
      article.createAt = res.data.createTime
      article.title = res.data.title
    })
    return {
      article
    }
  }
})

</script>


<style lang="less">
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 55%;
    display: flex;
    justify-content: space-between;
    .time {
      display: flex;
      text-align: end;
      align-items: center;
      opacity: 0.6;
    }
  }
}
li {
  list-style: none;
}
pre {
  padding: 10px;
  color: whitesmoke;
  background-color: darkslategray;
}
</style>