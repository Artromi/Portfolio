<template>
  <main class="bg-brightGrey-100 my-10 shadow-xl min-w-[800px] flex items-center justify-between">
    <div>
      <p class="text-2xl leading-10 text-center px-12 py-6">
        {{ $t('contact.description') }}
      </p>
      <div class="flex justify-center">
        <a class="hover:bg-mintGreen-100 p-2" href="mailto:arisenger0@gmail.com" title="Mail"
          ><IconMailbox class="text-black"
        /></a>
        <a
          class="hover:bg-mintGreen-100 p-2"
          href="https://github.com/Artromi"
          title="GitHub"
          target="_blank"
          ><IconGithub class="text-black"
        /></a>
        <a
          class="hover:bg-mintGreen-100 p-2"
          href="https://www.discordapp.com/users/.piepmatz"
          title="Discord"
          target="_blank"
          ><IconDiscord class="text-black"
        /></a>
        <a
          class="hover:bg-mintGreen-100 p-2"
          href="https://www.linkedin.com/in/a-senger/"
          title="LinkedIn"
          target="_blank"
          ><IconLinkedin class="text-black"
        /></a>
      </div>
    </div>
    <div class="h-auto max-w-[600px]">
      <img
        class="w-full"
        src="@/assets/images/mistakes.jpg"
        alt="picture of streetart with the text: mistakes are the portal to discovery"
      />
    </div>
  </main>
</template>

<script>
import IconMailbox from '@/components/IconMailbox.vue'
import IconGithub from '@/components/IconGithub.vue'
import IconLinkedin from '@/components/IconLinkedin.vue'
import IconDiscord from '@/components/IconDiscord.vue'

export default {
  components: {
    IconMailbox,
    IconGithub,
    IconLinkedin,
    IconDiscord
  }
}
</script>
