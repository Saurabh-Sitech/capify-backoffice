<template>
  <div id="not-found-container">
    <div>
      <h2>Page not found</h2>
      <p>
        This page could not be found
        <router-link to="/">Go back to home</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
#not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
</style>
