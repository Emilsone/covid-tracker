<template>
  <section>
    <div>
      <h1 class="py-4 px-5 text-xl">Overview</h1>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full px-6 sm:w-1/2 xl:w-1/4">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-sm bg-white">
          <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
            <!-- <i class="fa fa-hand-o-right px-2" aria-hidden="true"></i> -->
          </div>
          <div class="mx-5 md:mx-0">
            <p class="text-gray-900 text-sm text-bold">Confirmed</p>
            <h4 class="text-xl font-semibold text-gray-700">3.304.96</h4>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-sm bg-white">
          <div class="p-3 rounded-full bg-opacity-75 bg-black">
            <!-- <i class="fa fa-hand-o-right px-2" aria-hidden="true"></i> -->
          </div>
          <div class="mx-5 md:mx-0">
            <p class="text-gray-900 text-sm">Active</p>
            <h4 class="text-xl font-semibold text-gray-700">2058.29</h4>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 xl:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-sm bg-white">
          <div class="p-3 rounded-full bg-pink-600 bg-opacity-75"></div>
          <div class="mx-5 md:mx-0">
            <p class="text-gray-900 text-sm text-bold">Recovered</p>
            <h4 class="text-xl font-semibold text-gray-700">905</h4>
          </div>
        </div>
      </div>
      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 xl:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-sm bg-white">
          <div class="p-3 rounded-full bg-pink-600 bg-opacity-75"></div>
          <div class="mx-5 md:mx-0">
            <p class="text-gray-900 text-sm text-bold">Death</p>
            <h4 class="text-xl font-semibold text-gray-700">59.995</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TeamCard",
};
</script>


