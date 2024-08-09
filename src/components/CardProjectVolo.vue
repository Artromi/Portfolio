<template>
  <div class="bg-blue-400 bg-opacity-20 my-24 shadow-2xl py-14 px-16">
    <GalleriaPrime
      :value="images"
      :circular="true"
      :showItemNavigators="true"
      :showThumbnails="false"
      containerStyle="border: none"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <!-- <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.thumbnailImageSrc"
        :alt="slotProps.item.alt"
        style="display: block"
      />
    </template> -->
    </GalleriaPrime>
    <div class="text-xl leading-8 text-black mt-6">
      <p>
        VoloDB is an open source project that is intended to massively simplify the administration
        of the volunteer service formats "FSJ" (Freiwilliges Soziales Jahr) and "BFD"
        (Bundesfreiwilligendienst) recognized in Germany. As a team of 3 we started working on it in
        spring 2024.
      </p>
    </div>
  </div>
</template>

<script>
import volo1 from '@/assets/volo1.png'
import volo2 from '@/assets/volo2.png'
import volo3 from '@/assets/volo3.png'
import volo4 from '@/assets/volo4.png'
import volo5 from '@/assets/volo5.png'

export default {
  data() {
    return {
      images: [
        {
          itemImageSrc: volo1,
          alt: 'image of the login page from volodb, the administration software'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo2,
          alt: 'image of an table view in volodb, the administration software'
          // thumbnailImageSrc: 'path/to/thumb2.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo3,
          alt: 'detailview from an volunteer in volodb,  the administration software'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo4,
          alt: 'detailview of an volunteers contracts, sick days and pay from volodb,  the administration software'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo5,
          alt: 'image of an form to fill out in volodb,  the administration software'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        }
      ]
    }
  }
}
</script>
