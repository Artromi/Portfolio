<template>
  <div class="sticky top-0 w-full z-50">
    <div class="flex items-center h-24 relative bg-purple-100">
      <div class="triangle"></div>
      <nav class="flex gap-24 text-3xl text-black mr-auto">
        <a
          class="p-2"
          href="#about"
          :class="{ 'bg-green-100 ': activeSection === 'about' }"
          @click="activeSection = 'about'"
          >About me</a
        >
        <a
          class="p-2"
          href="#projects"
          :class="{ 'bg-green-100 ': activeSection === 'projects' }"
          @click="activeSection = 'projects'"
          >Projects</a
        >
        <a
          class="p-2"
          href="#contact"
          :class="{ 'bg-green-100 ': activeSection === 'contact' }"
          @click="activeSection = 'contact'"
          >Contact</a
        >
      </nav>
    </div>
    <aside class="flex gap-2 text-white text-lg mx-4 my-2 absolute top-0 right-2">
      <button class="bg-green-100 p-2 text-black">english</button>
      <button class="text-black">deutsch</button>
    </aside>
  </div>
</template>
<!-- TODO -->
<!-- scrolling and reload should update color of the navbar options (and url) -->
<!-- TODO -->
<script>
export default {
  data() {
    return {
      activeSection: 'about'
    }
  }
}
</script>
