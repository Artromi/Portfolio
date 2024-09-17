<template>
  <section class="mt-16">
    <h3 class="text-4xl text-shadow">{{ $t('titles.projects') }}</h3>
    <!-- VOLO CARD -->
    <div class="bg-brightGrey-100 my-10 shadow-2xl py-6 px-16 border-4 border-mintGreen-100">
      <p class="text-black text-xl leading-8 text-justify mb-8">
        {{ $t('projects.volo') }}
        <a
          class="underline underline-offset-4 hover:bg-mintGreen-100"
          href="https://github.com/volo-db"
          target="_blank"
          >{{ $t('projects.link') }}</a
        >
      </p>
      <div class="flex items-center justify-center gap-1">
        <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(-1, 'volo')">
          &#10094;
        </button>
        <img class="volo-slides mx-auto" src="@/assets/volo1.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo2.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo6.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo4.png" />
        <img class="volo-slides mx-auto hidden" src="@/assets/volo5.png" />
        <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(+1, 'volo')">
          &#10095;
        </button>
      </div>
    </div>
    <!-- BOOKMONKEY -->
    <div class="bg-brightGrey-100 my-10 shadow-2xl py-6 px-16 border-4 border-mintGreen-100">
      <p class="text-black text-xl leading-8 text-justify mb-8">
        {{ $t('projects.books') }}
      </p>
      <div class="flex items-center justify-center gap-1">
        <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(-1, 'book')">
          &#10094;
        </button>

        <img class="book-slides mx-auto" src="@/assets/bookmonkey-1.png" />
        <img class="book-slides mx-auto hidden" src="@/assets/bookmonkey-2.png" />
        <img class="book-slides mx-auto hidden" src="@/assets/bookmonkey-3.png" />

        <button class="bg-mintGreen-100 p-4 text-xl" @click="changeSlides(+1, 'book')">
          &#10095;
        </button>
      </div>
    </div>
    <!-- SHOPPING -->
    <div class="bg-brightGrey-100 my-10 shadow-2xl py-6 px-16 border-4 border-mintGreen-100">
      <p class="text-black text-xl leading-8 text-justify mb-8">
        {{ $t('projects.shopping') }}
        <a
          class="underline underline-offset-4 hover:bg-mintGreen-100"
          href="https://github.com/Artromi/shopping-layout "
          target="_blank"
          >GitHub-Repo</a
        >.
      </p>
      <div class="flex items-center justify-center gap-1">
        <img class="mx-auto" src="@/assets/shopping-layout.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectCard',
  setup() {
    let slideIndex = 1

    function changeSlides(n, item) {
      if (item === 'volo') {
        let slides = document.getElementsByClassName('volo-slides')
        showSlides((slideIndex += n), slides)
      }
      if (item === 'book') {
        let slides = document.getElementsByClassName('book-slides')
        showSlides((slideIndex += n), slides)
      }
    }

    function showSlides(n, slides) {
      let i
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      slides[slideIndex - 1].style.display = 'block'
    }

    return { changeSlides, showSlides }
  }
}
</script>
