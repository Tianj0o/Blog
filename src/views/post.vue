<template>
  <div class="posts">
    <div class="header adapwidth">
      <h1>{{ article.title }}</h1>
      <span class="time">{{ article.createAt }}</span>
    </div>
    <div class="adapwidth">
      <t-article :article="article.body"></t-article>
    </div>
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
    //请求文章数据 之后用vuex 存取 currentPage
    async function getArticleStart() {
      const res: any = await getArticle(route.params.title as string)
      article.body = res.data.articleBody
      article.createAt = res.data.createTime
      article.title = res.data.title
    }
    getArticleStart()
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
    // width: 55%;
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
@media screen and (max-width: 750px) {
  .adapwidth {
    width: 90%;
  }
}
@media screen and (min-width: 750px) {
  .adapwidth {
    width: 55%;
  }
}
</style>