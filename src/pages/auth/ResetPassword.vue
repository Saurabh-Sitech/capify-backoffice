<template>
  <div id="rest-password-container">
    <base-spinner v-if="loading"></base-spinner>
    <div class="flex-container">
      <div class="form-container">
        <div class="logo-container">
          <img src="/images/Capify_Logo.png" alt="Capify_Logo" />
        </div>
        <div class="welcome-text">Reset Password</div>
        <div class="error-container" v-if="error">{{ error }}</div>
        <form @submit.prevent="submitForm">
          <base-input
            placeholder="Password"
            type="password"
            field="password"
            :value="password"
            @change-value="setValue"
            :isValid="!!validPassword"
            :helperText="validPassword"
          ></base-input>

          <base-input
            placeholder="Confirm password"
            type="password"
            field="confirmPassword"
            :value="confirmPassword"
            @change-value="setValue"
            :isValid="!!validConfirmPassword"
            :helperText="validConfirmPassword"
          ></base-input>

          <base-button
            type="submit"
            stylevariant="primary"
            style="font-size: 15px; font-family: Roboto_Medium"
          >
            SET PASSWORD
          </base-button>
        </form>
        <div class="link-container">
          <div class="flex-container">
            <div class="link" @click="changeLink('login')">Back to login</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reset-Password-Page",
  data() {
    return {
      password: "",
      confirmPassword: "",
      isValidated: false,
    };
  },
  methods: {
    submitForm() {
      this.isValidated = true;
      if (!this.validEmail && !this.validPassword) {
        const actionPayload = {
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        console.log(actionPayload);
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
    validPassword() {
      return this.isValidated && !this.password && "Password is required.";
    },

    validConfirmPassword() {
      return this.isValidated
        ? !this.confirmPassword
          ? "Confirm password is required."
          : this.password !== this.confirmPassword
          ? "Password mismatch."
          : ""
        : "";
    },
  },
};
</script>

<style scoped>
#rest-password-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#rest-password-container .flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#rest-password-container .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
#rest-password-container .welcome-text {
  color: #5e595c;
  font-size: 24px;
  text-align: center;
  margin-bottom: 2rem;
  font-family: Roboto_Regular;
}
#rest-password-container .form-container {
  background-color: #ffffff;
  box-shadow: 1px 2px 29px #1717241a;
  border-radius: 5px;
  padding: 50px;
  width: 370px;
}
#rest-password-container .link-container {
  margin-top: 1rem;
}
#rest-password-container .link-container .link {
  font-family: Roboto_Regular;
  color: #8f8b8d;
  font-size: 15px;
  cursor: pointer;
}
#rest-password-container .link-container .link:hover {
  text-decoration: underline;
}
</style>
