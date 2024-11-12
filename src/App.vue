<template>
  <div class="min-h-screen relative overflow-auto">
    <NavigationBar />
    <main class="my-24 mx-auto max-w-[1200px]">
      <RouterView />
    </main>
    <footer class="bg-mintGreen-100 h-12 w-full absolute bottom-0">
      <img class="w-12" src="@/assets/images/progress.png" alt="" />
    </footer>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: { NavigationBar }
}
</script>
