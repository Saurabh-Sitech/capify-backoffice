import Vue from "vue";
import Router from "vue-router";

import Login from "./pages/auth/Login.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
import NotFound from "./pages/NotFound.vue";
import TheMainLayout from "./components/Layout/TheMainLayout.vue";
import Dashboard from "./pages/Dashboard.vue";
import Companies from "./pages/Companies.vue";
import Repayments from "./pages/Repayments.vue";
import Notifications from "./pages/Notifications.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/login" },
    {
      name: "login",
      meta: { title: "Login", requiresAuth: false },
      path: "/login",
      component: Login,
    },
    {
      name: "forgot-password",
      meta: { title: "Forgot Password?", requiresAuth: false },
      path: "/forgot-password",
      component: ForgotPassword,
    },
    {
      name: "reset-password",
      meta: { title: "Reset Password?", requiresAuth: false },
      path: "/reset-password",
      component: ResetPassword,
    },
    {
      path: "/",
      component: TheMainLayout,
      children: [
        {
          name: "Dashboard",
          meta: { title: "Dashboard", requiresAuth: true },
          path: "dashboard",
          component: Dashboard,
        },
        {
          name: "Companies",
          meta: { title: "Companies", requiresAuth: true },
          path: "companies",
          component: Companies,
        },
        {
          name: "Repayments",
          meta: { title: "Repayments", requiresAuth: true },
          path: "repayments",
          component: Repayments,
        },
        {
          name: "Notifications",
          meta: { title: "Notifications", requiresAuth: true },
          path: "notifications",
          component: Notifications,
        },
      ],
    },
    {
      name: "not-found",
      meta: { title: "Not Found" },
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  window.document.title = to.meta.title;
  if (to.meta.requiresAuth && !sessionStorage.getItem("token")) {
    sessionStorage.clear();
    next("/login");
  } else if (!to.meta.requiresAuth && sessionStorage.getItem("token")) {
    next("/dashboard");
  } else {
    next();
  }
});

router.afterEach(() => {
  const element = document.getElementById("content-container");
  if (element) {
    element.scrollTop = 0;
  }
});

export default router;
