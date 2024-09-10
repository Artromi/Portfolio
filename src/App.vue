<template>
  <div class="bg-offWhite-100 w-full overflow-hidden">
    <NavigationBar />
    <main class="mt-28 mx-auto max-w-4xl p-2 sm:py-0">
      <div id="about" class="pt-36 mt-[-144px]">
        <AboutMe />
      </div>
      <div id="projects" class="pt-32 mt-[-128px]">
        <ProjectCards />
      </div>
    </main>
    <ContactsAndFooter />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import ProjectCards from './components/ProjectCards.vue'
import ContactsAndFooter from '@/components/ContactsAndFooter.vue'

export default {
  components: { NavigationBar, AboutMe, ContactsAndFooter, ProjectCards }
}
</script>
