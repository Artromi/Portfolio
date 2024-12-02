<template>
  <div class="overflow-hidden h-screen grid grid-rows-[70px,auto,50px]">
    <NavigationBar />
    <main class="mt-12 mx-auto px-8 max-w-[1300px] overflow-auto">
      <RouterView />
    </main>
    <footer class="bg-mintGreen-100 w-full">
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
