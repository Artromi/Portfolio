<template>
  <div>
    <div>
      <h1 class="text-8xl text-shadow">Ari</h1>
      <h2 class="text-3xl text-shadow">{{ $t('titles.job') }}</h2>
    </div>

    <div class="flex flex-wrap gap-8 mt-12 items-center overflow-hidden p-6">
      <img
        class="max-w-64 w-full sm:w-auto"
        style="box-shadow: -12px -12px #99ff99"
        src="@/assets/images/profilbild2.jpg"
        alt="picture of ari"
      />

      <p class="flex-1 min-w-80 text-2xl leading-10 text-balance text-justify max-w-[600px]">
        {{ $t('about.bio') }}
      </p>
    </div>

    <!-- skill and tool section -->
    <div class="mt-12">
      <h3 class="text-4xl text-shadow">Skills & Tools</h3>
      <div class="flex flex-wrap gap-12 mt-4">
        <div>
          <h3 class="flex flex-wrap text-2xl p-1">{{ $t('about.skills.extended') }}:</h3>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">JavaScript</p>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">Vue.js</p>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">HTML</p>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">CSS</p>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">Git(Hub)</p>
          <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">Tailwind</p>
        </div>
        <div>
          <h3 class="text-2xl p-1">{{ $t('about.skills.basic') }}:</h3>
          <div>
            <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">TypeScript</p>
            <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">React.js</p>
            <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">Node.js</p>
            <p class="bg-mintGreen-100 px-2 mx-1 my-1 inline-block text-2xl">Postman</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
