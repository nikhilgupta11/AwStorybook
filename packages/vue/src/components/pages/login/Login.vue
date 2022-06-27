<template>
  <div>
    <AwModal
      id="login"
      :visible="openModal"
      :title="modalTitle"
      @close="openModal = false"
    >
      <transition name="sf-fade" mode="out-in">
        <div
          v-if="isLogIn"
          key="log-in"
          class="modal-content"
          data-testid="login-modal"
        >
          <form class="form" @submit.prevent="() => false">
            <AwInput
              v-model="email"
              name="email"
              label="Your email"
              class="form__element"
              type="email"
            />
            <AwInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="form__element"
              :has-show-password="true"
            />
            <AwCheckbox
              v-model="rememberMe"
              name="remember-me"
              label="Remember me"
              class="form__element form__checkbox"
            />
            <AwButton
              type="submit"
              class="sf-button--full-width form__submit"
              data-testid="log-in-button"
            >
              Log In
            </AwButton>
          </form>
          <AwButton
            class="sf-button--text action-button"
            data-testid="forgotten-password-button"
          >
            Forgotten password?
          </AwButton>
          <div class="aside">
            <AwHeading
              title="Don't have an account yet?"
              :level="2"
              class="aside__heading"
            />
            <AwButton
              class="sf-button--text"
              data-testid="register-now-button"
              @click="isLogIn = false"
            >
              Register now
            </AwButton>
          </div>
        </div>
        <div
          v-else
          key="sign-up"
          class="modal-content"
          data-testid="signin-modal"
        >
          <form class="form" @submit.prevent="() => false">
            <AwInput
              v-model="firstName"
              name="first-name"
              label="Name"
              class="form__element"
            />
            <AwInput
              v-model="lastName"
              name="last-name"
              label="Last Name"
              class="form__element"
            />
            <AwInput
              v-model="email"
              name="email"
              label="Your email"
              class="form__element"
              type="email"
            />
            <AwInput
              v-model="password"
              name="password"
              label="Password"
              type="password"
              class="form__element"
            />
            <AwButton
              type="submit"
              class="sf-button--full-width form__submit"
              data-testid="create-acount-button"
            >
              Create an account
            </AwButton>
          </form>
          <AwButton
            class="sf-button--text action-button"
            data-testid="log-in-account"
            @click="isLogIn = true"
          >
            or Log In To Your Account
          </AwButton>
        </div>
      </transition>
    </AwModal>
    <AwButton
      class="open-button"
      data-testid="open-modal-button"
      @click="toggleModal"
    >
      Open Modal
    </AwButton>
  </div>
</template>
<script>
import AwModal from "../../molecules/AwModal/AwModal.vue";
import AwInput from "../../atoms/AwInput/AwInput.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwCheckbox from "../../molecules/AwCheckbox/AwCheckbox.vue";
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";

// import {
//   SfModal,
//   SfInput,
//   SfButton,
//   SfCheckbox,
//   SfHeading,
// } from "@storefront-ui/vue";
export default {
  name: "Login",
  components: {
    AwModal,
    AwInput,
    AwButton,
    AwCheckbox,
    AwHeading,
  },
  data() {
    return {
      isLogIn: true,
      email: "",
      password: "",
      createAccount: false,
      rememberMe: false,
      firstName: "",
      lastName: "",
      openModal: false,
    };
  },
  computed: {
    modalTitle() {
      return this.isLogIn ? "Log In" : "Join Vue Storefront";
    },
  },
  watch: {
    isLogIn() {
      this.email = "";
      this.password = "";
      this.createAccount = false;
      this.rememberMe = false;
      this.firstName = "";
      this.lastName = "";
    },
  },
  methods: {
    toggleModal() {
      this.openModal = !this.openModal;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.modal-content,
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 100%;
  &__element {
    margin: var(--spacer-base) 0;
  }
  &__checkbox {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
  &__submit {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.action-button {
  margin: var(--spacer-xl) 0;
}
.open-button {
  margin: 0 auto;
}
.aside {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    --heading-title-color: var(--c-primary);
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    margin: 0 0 var(--spacer-sm) 0;
  }
}
</style>

<include-source />
