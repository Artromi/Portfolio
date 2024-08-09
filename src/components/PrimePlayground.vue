<template>
  <div class="bg-blue-400 bg-opacity-20 my-12 shadow-2xl py-14 px-16">
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
          alt: 'Description for Image 1'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo2,
          alt: 'Description for Image 2'
          // thumbnailImageSrc: 'path/to/thumb2.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo3,
          alt: 'Description for Image 1'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo4,
          alt: 'Description for Image 1'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        },
        {
          itemImageSrc: volo5,
          alt: 'Description for Image 1'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        }
      ]
    }
  }
}
</script>
