<template>
  <div class="post">
    <t-article :article="article.body"></t-article>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TArticle from '../components/article.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
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

    const route = useRoute()
    console.log(route.params.title)
    return {
      article
    }
  }
})

</script>


<style lang="less">
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>