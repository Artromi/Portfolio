<template>
  <div class="bg-blue-400 bg-opacity-20 my-12 shadow-2xl py-14 px-16">
    <div class="relative">
      <img class="volo-slides mx-auto" src="@/assets/volo1.png" />
      <img class="volo-slides mx-auto hidden" src="@/assets/volo2.png" />
      <img class="volo-slides mx-auto hidden" src="@/assets/volo4.png" />
      <button class="absolute top-1/2 left-0 bg-green-100 p-2" @click="plusSlides(-1)">
        &#10094;
      </button>
      <button class="absolute top-1/2 right-0 bg-green-100 p-2" @click="plusSlides(+1)">
        &#10095;
      </button>
    </div>
    <p class="text-black text-xl leading-6 py-4 text-justify">
      VoloDB is an open source project that is intended to massively simplify the administration of
      the volunteer service formats "FSJ" (Freiwilliges Soziales Jahr) and "BFD"
      (Bundesfreiwilligendienst) recognized in Germany. As a team of 3 we started working on it in
      spring 2024.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1
    }
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n))
    },
    showSlides(n) {
      let i
      let slides = document.getElementsByClassName('volo-slides')

      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slidedIndex.length = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      slides[this.slideIndex - 1].style.display = 'block'
    }
  }
  // mounted() {
  //   this.plusSlides()
  // }
}
</script>
