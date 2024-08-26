<template>
  <div id="contact" class="flex gap-12 justify-center items-center bg-green-100 h-56">
    <a href="mailto:arisenger0@gmail.com"><IconMailbox class="text-black" /></a>
    <a href="https://github.com/Artromi" target="_blank"><IconGithub class="text-black" /></a>
    <a href="https://www.linkedin.com/in/a-senger/" target="_blank"
      ><IconLinkedin class="text-black"
    /></a>
    <!-- <a href=""><IconDownload class="text-black" /></a> -->
  </div>
</template>

<script>
import IconMailbox from './IconMailbox.vue'
import IconGithub from './IconGithub.vue'
import IconLinkedin from './IconLinkedin.vue'
// import IconDownload from './IconDownload.vue'

export default {
  components: {
    IconMailbox,
    IconGithub,
    IconLinkedin
    // IconDownload
  }
}
</script>
