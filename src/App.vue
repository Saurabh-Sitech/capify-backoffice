<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
@font-face {
  font-family: "Roboto_Regular";
  src: url("./fonts/Roboto-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto_Medium";
  src: url("./fonts/Roboto-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto_Bold";
  src: url("./fonts/Roboto-Bold.ttf") format("truetype");
}

body {
  margin: 0;
  font-family: "Roboto_Regular" !important;
  background-color: #f5f3ef !important;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
