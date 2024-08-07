<template>
  <div class="bg-blue-400 bg-opacity-20 my-12 shadow-2xl py-14 px-16">
    <div class="relative">
      <img class="volo-slides mx-auto" src="@/assets/volo-1.png" />
      <img class="volo-slides mx-auto hidden" src="@/assets/volo-2.png" />
      <img class="volo-slides mx-auto hidden" src="@/assets/volo-3.png" />
      <button class="absolute top-1/2 left-0 bg-green-100 p-2" @click="plusSlides(-1)">
        &#10094;
      </button>
      <button class="absolute top-1/2 right-0 bg-green-100 p-2" @click="plusSlides(+1)">
        &#10095;
      </button>
    </div>
    <p class="text-black text-xl leading-6 py-4 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti atque alias labore ea
      impedit, voluptatum non cum quibusdam consectetur temporibus, consequuntur libero rem iste
      recusandae officiis? Impedit aliquam iure sint. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Aliquid, consectetur? Quaerat, architecto. Incidunt a omnis quis aperiam,
      cumque aliquam harum hic veritatis ab? Quasi repellat, officia voluptatum ipsum veritatis
      cumque!
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
