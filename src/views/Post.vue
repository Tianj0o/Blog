<template>
  <div class="posts">
    <div class="header adapwidth">
      <h2>{{ article.title }}</h2>
      <span class="time">{{ article.createAt }}</span>
    </div>
    <div class="adapwidth">
      <t-article :article="article.body"></t-article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
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

    const store = useStore()
    const articleInfoLists = computed(() => store.state.articleInfoLists)
    const findArticle = articleInfoLists.value.find((item: any) => item.title === route.params.title)
    article.title = findArticle.title
    article.createAt = findArticle.createAt
    async function getArticleStart() {
      const res: any = await getArticle(route.params.title as string)
      article.body = res.data.articleBody
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
  width: 90%;
  margin: 0 auto;
  .header {
    // width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    padding: 0 10px;
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
}
@media screen and (max-width: 750px) {
  .adapwidth {
    width: 100%;
  }
}
@media screen and (min-width: 750px) {
  .adapwidth {
    width: 55%;
  }
}
img {
  max-width: 100% !important;
}
blockquote {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
