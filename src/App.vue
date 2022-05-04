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

@font-face {
  font-family: "Roboto_Italic";
  src: url("./fonts/Roboto-Italic.ttf") format("truetype");
}

body {
  margin: 0;
  font-family: "Roboto_Regular" !important;
  background-color: #f5f3ef !important;
}
</style>
