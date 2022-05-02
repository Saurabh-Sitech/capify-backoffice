import Vue from "vue";
import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BasePagination from "./components/UI/BasePagination.vue";

Vue.component("base-input", BaseInput);
Vue.component("base-button", BaseButton);
Vue.component("base-spinner", BaseSpinner);
Vue.component("base-pagination", BasePagination);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
