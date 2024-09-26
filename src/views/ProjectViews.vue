<template>
  <div>
    <ProjectCard :description="$t('projects.volo')" :slides="this.voloSlides" />
  </div>
</template>

<script>
import volo1 from '@/assets/volo1.png'
import volo2 from '@/assets/volo2.png'
import volo6 from '@/assets/volo6.png'
import volo4 from '@/assets/volo4.png'
import volo5 from '@/assets/volo5.png'
export default {
  data() {
    return {
      voloSlides: [volo1, volo2, volo6, volo4, volo5]
    }
  }
}
</script>
