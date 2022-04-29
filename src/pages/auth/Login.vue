<template>
  <div id="login-container">
    <base-spinner v-if="loading"></base-spinner>
    <div class="flex-container">
      <div class="form-container">
        <div class="logo-container">
          <img src="/images/Capify_Logo.png" alt="Capify_Logo" />
        </div>
        <div class="welcome-text">Log Into My Account</div>
        <div class="error-container" v-if="error">{{ error }}</div>
        <form @submit.prevent="submitForm">
          <base-input
            placeholder="Email"
            type="text"
            field="email"
            :value="email"
            @change-value="setValue"
            :isValid="!!validEmail"
            :helperText="validEmail"
          ></base-input>
          <base-input
            placeholder="Password"
            type="password"
            field="password"
            :value="password"
            @change-value="setValue"
            :isValid="!!validPassword"
            :helperText="validPassword"
          ></base-input>

          <base-button
            type="submit"
            stylevariant="primary"
            style="font-size: 15px; font-family: Roboto_Medium"
          >
            LOG IN
          </base-button>
        </form>
        <div class="link-container">
          <div class="flex-container" style="justify-content: space-between">
            <div class="link">Don’t have an account?</div>
            <div class="link" @click="changeLink('forgot-password')">
              Forgot password?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login-Page",
  data() {
    return {
      email: "",
      password: "",
      isValidated: false,
    };
  },
  methods: {
    submitForm() {
      this.isValidated = true;
      if (!this.validEmail && !this.validPassword) {
        const actionPayload = {
          email: this.email,
          password: this.password,
        };

        sessionStorage.setItem("token", this.email);
        sessionStorage.setItem("user", JSON.stringify(actionPayload));
        this.$router.push("/dashboard");
      }
    },
    setValue(val, field) {
      this[field] = val;
    },
    changeLink(name) {
      this.$router.push({ name });
    },
  },
  computed: {
    loading() {
      return this.$store.getters["auth/loading"];
    },
    success() {
      return this.$store.getters["auth/success"];
    },
    error() {
      return this.$store.getters["auth/error"];
    },
    validEmail() {
      return (
        this.isValidated &&
        ((!this.email && "Email is required.") ||
          (this.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email) &&
            "Email is invalid."))
      );
    },
    validPassword() {
      return this.isValidated && !this.password && "Password is required.";
    },
  },
};
</script>

<style scoped>
#login-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#login-container .flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#login-container .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
#login-container .welcome-text {
  color: #5e595c;
  font-size: 24px;
  text-align: center;
  margin-bottom: 2rem;
  font-family: Roboto_Regular;
}
#login-container .form-container {
  background-color: #ffffff;
  box-shadow: 1px 2px 29px #1717241a;
  border-radius: 5px;
  padding: 50px;
  width: 370px;
}
#login-container .link-container {
  margin-top: 1rem;
}
#login-container .link-container .link {
  font-family: Roboto_Regular;
  color: #8f8b8d;
  font-size: 15px;
  cursor: pointer;
}
#login-container .link-container .link:hover {
  text-decoration: underline;
}
</style>
