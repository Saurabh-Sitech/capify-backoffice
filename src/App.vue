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

#confirm-modal .modal-body {
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 2px 29px #1717241a;
}

#confirm-modal .modal-title {
  margin-bottom: 1rem;
  font-size: 24px;
  color: #5e595c;
}
</style>
