<template>
  <footer class="bg-mintGreen-100 h-64 flex items-center">
    <div id="contact" class="flex gap-12 mx-auto">
      <a href="mailto:arisenger0@gmail.com" title="Mail"><IconMailbox class="text-black" /></a>
      <a href="https://github.com/Artromi" title="GitHub" target="_blank"
        ><IconGithub class="text-black"
      /></a>
      <a href="https://www.linkedin.com/in/a-senger/" title="LinkedIn" target="_blank"
        ><IconLinkedin class="text-black"
      /></a>
    </div>
    <img class="w-12 mr-8" src="@/assets/progress.png" />
  </footer>
</template>

<script>
import IconMailbox from './IconMailbox.vue'
import IconGithub from './IconGithub.vue'
import IconLinkedin from './IconLinkedin.vue'

export default {
  components: {
    IconMailbox,
    IconGithub,
    IconLinkedin
  }
}
</script>
