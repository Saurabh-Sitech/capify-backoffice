<template>
  <div id="main-container">
    <div id="sidebar-container">
      <the-sidebar></the-sidebar>
    </div>
    <div id="content-container">
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
#sidebar-container {
  width: 280px;
  position: fixed;
}
#content-container {
  height: 100vh;
  width: 100%;
  margin-left: 280px;
  overflow: auto;
}
</style>
