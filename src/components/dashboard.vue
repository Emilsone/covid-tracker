<template>
  <div class="flex ">
    <SideBar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <NavLink />

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavLink from "@/components/NavLink.vue";
import SideBar from "./side-bar/side-bar.vue";
// import overview from "@/components/overview.vue";
export default {
  name: "Dashboard",
  components: { SideBar, NavLink },
};
</script>

<style scoped>
</style>
