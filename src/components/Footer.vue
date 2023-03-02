<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { author, email, site } from '~/meta'

const router = useRouter()
const route = useRoute()

const isCdShow = computed(() => {
  return (/\/.*/.test(route.path) || route.path === '/')
          && (route.path.includes('/posts') || route.path === '/projects')
})

function routerBack() {
  if (['/posts', '/projects'].includes(route.path))
    router.replace('/')
  else
    router.back()
}
</script>

<template>
  <footer
    class="flex items-center flex-col-reverse sm:flex-row lt-sm:gap-4 text-4 my-10 justify-between"
  >
    <div class="op-50 text-sm">
      <a
        class="item"
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc/4.0/"
      >CC BY-NC-SA 4.0</a>
      {{ new Date().getFullYear() }} ©
      <a
        :href="`mailto:${email}`"
        class="item"
      >{{ author }}</a>
    </div>
    <div class="op-70 text-sm">
      <!-- <router-link class="item" to="/posts">
        Post
      </router-link>
      <span> · </span>
      <a
        class="item"
        target="_blank"
        :href="`${site}/feed.xml`"
      >RSS</a> -->
      <a v-if="isCdShow" class="item cursor-pointer" @click="routerBack">
        > cd ../
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer a.item{
  --at-apply: pb-0.3 border-b border-transparent hover:border-c-fg transition-border-color-300;
}
</style>
