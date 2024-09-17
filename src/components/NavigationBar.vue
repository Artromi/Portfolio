<template>
  <div class="$attr">
    <div class="flex items-center h-auto sm:h-28 bg-offWhite-100">
      <div class="triangle hidden md:block"></div>
      <nav class="flex flex-col sm:flex-row sm:gap-24 text-3xl text-black pt-4">
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
          >{{ $t('titles.projects') }}</a
        >
        <a
          class="p-2"
          href="#contact"
          :class="{ 'bg-mintGreen-100 ': activeSection === 'contact' }"
          @click="activeSection = 'contact'"
          >{{ $t('titles.contact') }}</a
        >
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
      activeSection: 'about',
      activeLang: this.$i18n.locale
    }
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang
      this.activeLang = this.$i18n.locale
    }
  }
}
</script>
