<template>
  <div class="bg-purple-100">
    <NavigationBar />
    <main class="max-w-6xl mx-auto mt-28 px-10">
      <div id="about" class="pt-36 mt-[-144px]">
        <AboutMe />
      </div>
      <div id="projects" class="pt-32 mt-[-128px]">
        <ProjectCard />
      </div>
    </main>
    <ContactsAndFooter />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactsAndFooter from '@/components/ContactsAndFooter.vue'

export default {
  components: { NavigationBar, AboutMe, ContactsAndFooter, ProjectCard }
  // methods: {
  //   handleScroll() {
  //     console.log(window.scrollY)
  //   }
  // },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll())
  // },
  // unmounted() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
}
</script>
