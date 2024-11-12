<template>
  <!-- VOLO -->
  <div class="py-12 px-14 min-w-[800px]">
    <h3 class="text-4xl text-shadow">Volodb</h3>
    <p class="text-black text-xl leading-8 text-justify mb-8">
      {{ $t('projects.volo') }}
      <a
        class="underline underline-offset-4 hover:bg-mintGreen-100"
        href="https://github.com/volo-db"
        target="_blank"
        >{{ $t('projects.link') }}</a
      >
    </p>
    <div class="relative">
      <button
        class="absolute top-1/2 text-xl hover:bg-mintGreen-100 hover:bg-opacity-50 p-4"
        @click="changeSlides(-1, 'volo')"
      >
        &#10094;
      </button>
      <img class="volo-slides w-full" src="@/assets/images/volo1.png" />
      <img class="volo-slides w-full hidden" src="@/assets/images/volo2.png" />
      <img class="volo-slides w-full hidden" src="@/assets/images/volo6.png" />
      <img class="volo-slides w-full hidden" src="@/assets/images/volo4.png" />
      <img class="volo-slides w-full hidden" src="@/assets/images/volo5.png" />
      <button
        class="absolute top-1/2 right-0 text-xl hover:bg-mintGreen-100 hover:bg-opacity-50 p-4"
        @click="changeSlides(+1, 'volo')"
      >
        &#10095;
      </button>
    </div>
  </div>

  <!-- 
    <div class="bg-brightGrey-100 my-10 shadow-2xl py-12 px-14 min-w-[800px]">
      <h3 class="text-4xl text-shadow">Bookmonkey</h3>
      <p class="text-black text-xl leading-8 text-justify mb-8">
        {{ $t('projects.books') }}
      </p>
      <div class="relative">
        <button
          class="absolute top-1/2 text-xl hover:bg-mintGreen-100 hover:bg-opacity-50 p-4"
          @click="changeSlides(-1, 'book')"
        >
          &#10094;
        </button>

        <img class="book-slides w-full" src="@/assets/bookmonkey-1.png" />
        <img class="book-slides w-full hidden" src="@/assets/bookmonkey-2.png" />
        <img class="book-slides w-full hidden" src="@/assets/bookmonkey-3.png" />

        <button
          class="absolute top-1/2 right-0 text-xl hover:bg-mintGreen-100 hover:bg-opacity-50 p-4"
          @click="changeSlides(+1, 'book')"
        >
          &#10095;
        </button>
      </div>
    </div>
    

    <div class="bg-brightGrey-100 my-10 shadow-2xl py-12 px-14 min-w-[800px]">
      <h3 class="text-4xl text-shadow">shopping</h3>
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
        <img class="w-full" src="@/assets/shopping-layout.png" />
      </div>
    </div>
    -->
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
