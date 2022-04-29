<template>
  <button
    class="btn"
    :class="{
      primaryBtn: stylevariant === 'primary',
    }"
    :type="type"
    @click="onClick"
    :style="style"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "onClick", "stylevariant", "style"],
};
</script>

<style scoped>
.btn {
  border-radius: 6px;
  text-transform: capitalize;
  padding: 10px 20px;
  width: -webkit-fill-available;
  cursor: pointer;
}
.primaryBtn {
  background-color: #741b47;
  color: #ffe599;
  border: 1px solid #741b47;
}
.primaryBtn:hover {
  background-color: #6b2346;
}
.primaryBtn:disabled {
  opacity: 0.3;
}
</style>
