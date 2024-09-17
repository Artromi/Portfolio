<template>
  <div class="flex items-center h-24 bg-offWhite-100">
    <div class="triangle hidden md:block"></div>
    <nav class="flex sm:gap-24 text-3xl text-black">
      <a
        class="p-2"
        href="#about"
        :class="{ 'bg-mintGreen-100 ': activeSection === 'about' }"
        @click="activeSection = 'about'"
        >About me</a
      >
      <a
        class="p-2"
        href="#projects"
        :class="{ 'bg-mintGreen-100 ': activeSection === 'projects' }"
        @click="activeSection = 'projects'"
        >Projects</a
      >
      <a
        class="p-2"
        href="#contact"
        :class="{ 'bg-mintGreen-100 ': activeSection === 'contact' }"
        @click="activeSection = 'contact'"
        >Contact</a
      >
    </nav>
  </div>
  <!-- <aside class="flex gap-2 text-white text-lg mx-4 my-2 absolute top-0 right-2">
      <button class="bg-green-100 p-2 text-black">english</button>
      <button class="text-black">deutsch</button>
    </aside> -->
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'about'
    }
  }
}
</script>
