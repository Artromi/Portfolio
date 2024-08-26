<template>
  <section class="mt-16">
    <h3 class="text-4xl text-shadow">Projects</h3>
    <!-- VOLO CARD -->
    <div
      class="bg-blue-400 bg-opacity-20 my-10 shadow-2xl py-6 px-16 min-w-[600px] border-2 border-green-100"
    >
      <p class="text-black text-xl leading-8 text-justify mb-8">
        VoloDB is an open source project that is intended to massively simplify the administration
        of the volunteer service formats "FSJ" (Freiwilliges Soziales Jahr) and "BFD"
        (Bundesfreiwilligendienst) recognized in Germany. As a team of 3 we started working on it in
        spring 2024.
      </p>
      <div class="flex items-center justify-center gap-1 min-w-96">
        <button class="bg-green-100 p-4 text-xl" @click="changeSlides(-1, 'volo')">&#10094;</button>
        <img class="volo-slides mx-auto" src="@/assets/volo1.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo2.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo6.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo4.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo5.png" />
        <button class="bg-green-100 p-4 text-xl" @click="changeSlides(+1, 'volo')">&#10095;</button>
      </div>
    </div>
    <!-- BOOKMONKEY -->
    <div
      class="bg-blue-400 bg-opacity-20 my-10 shadow-2xl py-6 px-16 min-w-[600px] border-2 border-green-100"
    >
      <p class="text-black text-xl leading-8 text-justify mb-8">
        Using the Bookmonkey API, this Website should list books, mark them as favorites and show
        details of single books.
      </p>
      <div class="flex items-center justify-center gap-1 min-w-96">
        <button class="bg-green-100 p-4 text-xl" @click="changeSlides(-1, 'book')">&#10094;</button>
        <img class="book-slides mx-auto" src="@/assets/bookmonkey.png" />
        <img class="book-slides mx-auto hidden" src="@/assets/bookmonkey2.png" />
        <img class="book-slides mx-auto hidden" src="@/assets/bookmonkey3.png" />

        <button class="bg-green-100 p-4 text-xl" @click="changeSlides(+1, 'book')">&#10095;</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1
    }
  },
  methods: {
    changeSlides(n, item) {
      if (item === 'volo') {
        let slides = document.getElementsByClassName('volo-slides')
        this.showSlides((this.slideIndex += n), slides)
      }
      if (item === 'book') {
        let slides = document.getElementsByClassName('book-slides')
        this.showSlides((this.slideIndex += n), slides)
      }
    },
    showSlides(n, slides) {
      let i
      // let slides = document.getElementsByClassName('volo-slides')

      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
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
