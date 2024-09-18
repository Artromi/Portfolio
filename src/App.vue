<template>
  <div class="bg-offWhite-100 w-full overflow-hidden">
    <NavigationBar class="w-full fixed top-0" />
    <main class="mt-28 mx-auto max-w-4xl p-2 sm:py-0">
      <div id="about" class="pt-48 mt-[-112px]">
        <AboutMe />
      </div>
      <div id="projects" class="pt-32 mt-[-128px]">
        <ProjectCard :description="$t('projects.volo')" :slides="this.slides" />
      </div>
    </main>
    <ContactsAndFooter />
  </div>
</template>

<script>
import volo1 from '@/assets/volo1.png'
import volo2 from '@/assets/volo2.png'
import volo6 from '@/assets/volo6.png'
import volo4 from '@/assets/volo4.png'
import volo5 from '@/assets/volo5.png'

import NavigationBar from '@/components/NavigationBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactsAndFooter from '@/components/ContactsAndFooter.vue'

export default {
  components: { NavigationBar, AboutMe, ContactsAndFooter, ProjectCard },
  data() {
    return {
      coordinates: null,
      visibleSection: null,
      slides: [volo1, volo2, volo6, volo4, volo5]
    }
  },
  methods: {
    getCoordinates() {
      const section = document.getElementById('projects')
      this.coordinates = section.getBoundingClientRect()
    }
  },

  created() {
    window.location.hash = '#about'
  }
  // mounted() {
  //   this.getCoordinates()
  // }
}
</script>
