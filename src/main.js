import { createApp } from "vue";
import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BasePagination from "./components/UI/BasePagination.vue";

const app = createApp(App);

app.directive("click-outside", {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

app.use(router);
app.use(store);
app.component("base-input", BaseInput);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("base-pagination", BasePagination);

app.mount("#app");
