<template>
  <div id="forgot-password-container">
    <base-spinner v-if="loading"></base-spinner>
    <div class="flex-container">
      <div class="form-container">
        <div class="logo-container">
          <img src="/images/Capify_Logo.png" alt="Capify_Logo" />
        </div>
        <div class="welcome-text">Forgot Password?</div>
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

          <base-button
            type="submit"
            stylevariant="primary"
            style="font-size: 15px; font-family: Roboto_Medium"
          >
            SEND LINK
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
  name: "Forgot-Password-Page",
  data() {
    return {
      email: "",
      isValidated: false,
    };
  },
  methods: {
    submitForm() {
      this.isValidated = true;
      if (!this.validEmail) {
        const actionPayload = {
          email: this.email,
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
    validEmail() {
      return (
        this.isValidated &&
        ((!this.email && "Email is required.") ||
          (this.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email) &&
            "Email is invalid."))
      );
    },
  },
};
</script>

<style scoped>
#forgot-password-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#forgot-password-container .flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#forgot-password-container .logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}
#forgot-password-container .welcome-text {
  color: #5e595c;
  font-size: 24px;
  text-align: center;
  margin-bottom: 2rem;
  font-family: Roboto_Regular;
}
#forgot-password-container .form-container {
  background-color: #ffffff;
  box-shadow: 1px 2px 29px #1717241a;
  border-radius: 5px;
  padding: 50px;
  width: 370px;
}
#forgot-password-container .link-container {
  margin-top: 1rem;
}
#forgot-password-container .link-container .link {
  font-family: Roboto_Regular;
  color: #8f8b8d;
  font-size: 15px;
  cursor: pointer;
}
#forgot-password-container .link-container .link:hover {
  text-decoration: underline;
}
</style>
