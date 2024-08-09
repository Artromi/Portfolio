<template>
  <div id="contact" class="flex gap-12 justify-center items-center bg-green-100 h-48">
    <a href=""><IconMailbox class="text-black" /></a>
    <a href=""><IconGithub class="text-black" /></a>
    <a href=""><IconLinkedin class="text-black" /></a>
    <a href=""><IconDownload class="text-black" /></a>
  </div>
</template>

<script>
import IconMailbox from './IconMailbox.vue'
import IconGithub from './IconGithub.vue'
import IconLinkedin from './IconLinkedin.vue'
import IconDownload from './IconDownload.vue'

export default {
  components: {
    IconMailbox,
    IconGithub,
    IconLinkedin,
    IconDownload
  }
}
</script>
