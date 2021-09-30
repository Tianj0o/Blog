<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import simpleInfo from '@/components/simpleInfo.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    simpleInfo
  },
  setup() {
    const store = useStore()
    const titles = computed(() => store.state.allArticlesTitle)

    const router = useRouter()

    const handleDetailsClick = (title: string) => {
      const path = `/posts/${title.replace('.md', '')}`
      router.push(path)
    }
    return {
      titles,
      handleDetailsClick,
    }
  }
})

</script>

<template>
  <div class="articleInfo" ref="articleInfoRef">
    <template v-for="item in titles" :key="item">
      <simple-info @click="handleDetailsClick(item)" :title="item"></simple-info>
    </template>
  </div>
</template>

<style lang="less" scoped>
.articleInfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>