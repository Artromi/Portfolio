<template>
  <div>
    <div class="flex items-center bg-offWhite-100 h-full">
      <div class="triangle hidden md:block"></div>
      <nav class="flex flex-col sm:flex-row sm:gap-24 text-3xl text-black pt-4">
        <button
          class="p-2"
          :class="{ 'bg-mintGreen-100 ': this.$route.name === 'about' }"
          @click="gotToAboutView()"
        >
          About me
        </button>
        <button
          class="p-2"
          @click="goToProjectsView()"
          :class="{ 'bg-mintGreen-100 ': this.$route.name === 'projects' }"
        >
          {{ $t('titles.projects') }}
        </button>
        <button
          class="p-2"
          @click="goToContactView()"
          :class="{ 'bg-mintGreen-100 ': this.$route.name === 'contact' }"
        >
          {{ $t('titles.contact') }}
        </button>
      </nav>
    </div>
    <aside class="flex gap-2 absolute top-1 right-1">
      <button
        @click="setLanguage('en')"
        class="p-1 text-black"
        :class="{ 'bg-mintGreen-100': this.activeLang === 'en' }"
      >
        english
      </button>
      <button
        @click="setLanguage('de')"
        class="text-black"
        :class="{ 'bg-mintGreen-100': this.activeLang === 'de' }"
      >
        deutsch
      </button>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLang: this.$i18n.locale
    }
  },
  methods: {
    gotToAboutView() {
      this.$router.push({ name: 'about' })
    },
    goToProjectsView() {
      this.$router.push({ name: 'projects' })
    },
    goToContactView() {
      this.$router.push({ name: 'contact' })
    },
    setLanguage(lang) {
      this.$i18n.locale = lang
      this.activeLang = this.$i18n.locale
    }
  }
}
</script>
