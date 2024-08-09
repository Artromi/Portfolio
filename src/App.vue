<template>
  <div class="bg-purple-100">
    <NavigationBar />
    <main class="max-w-4xl mx-auto mt-24">
      <AboutMe />
      <ProjectCard />
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
}
</script>
