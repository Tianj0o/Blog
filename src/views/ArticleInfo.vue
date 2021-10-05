<script lang="ts">
import { defineComponent, computed } from 'vue'
import simpleInfo from '@/components/simpleInfo.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { articleInfo } from '@/store/type'
export default defineComponent({
  components: {
    simpleInfo
  },
  setup() {
    const store = useStore()
    const articleInfoLists = computed<articleInfo[]>(() => store.state.articleInfoLists)

    const router = useRouter()

    const handleDetailsClick = (title: string) => {
      const path = `/posts/${title}`
      router.push(path)
    }
    return {
      articleInfoLists,
      handleDetailsClick,
    }
  }
})

</script>

<template>
  <div class="articleInfo" ref="articleInfoRef">
    <template v-for="articleInfo in articleInfoLists" :key="articleInfo.title">
      <simple-info
        @click="handleDetailsClick(articleInfo.title)"
        :title="articleInfo.title"
        :createAt="articleInfo.createAt"
      ></simple-info>
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