<template>
  <div class="bg-brightGrey-100 my-10 shadow-2xl py-6 px-16 border-4 border-mintGreen-100">
    <p class="text-black text-xl leading-8 text-justify mb-8">{{ description }}</p>
    <div class="flex items-center justify-center gap-1">
      <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(-1, 'volo')">
        &#10094;
      </button>
      <img :src="slides[slideIndex - 1]" class="volo-slides mx-auto" />

      <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(+1)">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    description: String,
    slides: Array
  },
  data() {
    return {
      slideIndex: 1
    }
  },
  methods: {
    changeSlides(n) {
      this.slideIndex += n

      if (this.slideIndex > this.slides.length) {
        this.slideIndex = 1
      }
      if (this.slideIndex < 1) {
        this.slideIndex = this.slides.length
      }
    }
  }

  //   computed: {
  //     // Calculate the current slide index (adjusted for 0-based indexing)
  //     currentSlideIndex() {
  //       return this.slideIndex - 1
  //     }
  //   }
}
</script>
