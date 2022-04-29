<template>
  <div id="main-container">
    <div class="sidebar-container">
      <the-sidebar></the-sidebar>
    </div>
    <div class="content-container">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar.vue";
export default {
  components: { TheSidebar },
};
</script>

<style scoped>
#main-container {
  display: flex;
}
.sidebar-container {
  width: 280px;
}
</style>
