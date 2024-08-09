<template>
  <div class="bg-blue-400 bg-opacity-20 my-24 shadow-2xl py-14 px-16">
    <GalleriaPrime
      :value="images"
      :circular="true"
      :showItemNavigators="false"
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
    <div class="text-xl leading-8 text-black mt-6 text-center">
      <p>An simple shopping layout i did just using HTML and CSS.</p>
    </div>
  </div>
</template>

<script>
import shopping from '@/assets/shopping-layout.png'
export default {
  data() {
    return {
      images: [
        {
          itemImageSrc: shopping,
          alt: 'image of an shopping layout with different shoes to shop'
          // thumbnailImageSrc: 'path/to/thumb1.jpg' // Uncomment if using thumbnails
        }
      ]
    }
  }
}
</script>
