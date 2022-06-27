<template>
  <AwTabs class="sf-my-profile" :open-tab="1">
    <AwTab :title="tabsTitles[0]">
      <slot
        name="personal-data-description"
        v-bind="{ personalDataDescription }"
      >
        <p class="message">
          {{ personalDataDescription }}
        </p>
      </slot>
      <div class="form" v-bind="{ personalInputsLabels, saveButtonText }">
        <slot name="personal-data-form">
          <AwInput
            v-model="firstName"
            name="firstName"
            :label="personalInputsLabels[0]"
            required
            class="form__element form__element--half"
          />
          <AwInput
            v-model="lastName"
            name="lastName"
            :label="personalInputsLabels[1]"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <AwInput
            v-model="email"
            type="email"
            name="email"
            :label="personalInputsLabels[2]"
            required
            class="form__element"
          />
          <AwButton
            class="form__button"
            data-testid="save-changes-button"
            @click="updatePersonal"
          >
            {{ saveButtonText }}
          </AwButton>
        </slot>
      </div>
      <slot name="personal-data-notice">
        <p class="notice">
          At Brand name, we attach great importance to privacy issues and are
          committed to protecting the personal data of our users. Learn more
          about how we care and use your personal data in the
          <a href="">Privacy Policy.</a>
        </p>
      </slot>
    </AwTab>
    <AwTab :title="tabsTitles[1]">
      <slot name="password-change-description">
        <p class="message">
          If you want to change the password to access your account, enter the
          following information:<br />
          Your current email address is
          <span class="message__label">example@email.com</span>
        </p>
      </slot>
      <div class="form">
        <slot
          name="password-change-form"
          v-bind="{ passwordInputsLabels, updateButtonText }"
        >
          <AwInput
            v-model="currentPassword"
            type="password"
            name="currentPassword"
            :label="passwordInputsLabels[0]"
            required
            class="form__element"
          />
          <AwInput
            v-model="newPassword"
            type="password"
            name="newPassword"
            :label="passwordInputsLabels[1]"
            required
            class="form__element form__element--half"
          />
          <AwInput
            v-model="repeatPassword"
            type="password"
            name="repeatPassword"
            :label="passwordInputsLabels[2]"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <AwButton
            class="form__button"
            data-testid="update-password-button"
            @click="updatePassword"
          >
            {{ updateButtonText }}
          </AwButton>
        </slot>
      </div>
    </AwTab>
  </AwTabs>
</template>
<script>
import AwTabs from "../../organisms/AwTabs/AwTabs.vue";
import AwInput from "../../atoms/AwInput/AwInput.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwMyProfile",
  components: {
    AwTabs,
    AwInput,
    AwButton,
  },
  props: {
    tabsTitles: {
      type: Array,
      default: () => ["Personal data", "Password change"],
    },
    account: {
      type: Object,
      default: () => ({}),
    },
    personalInputsLabels: {
      type: Array,
      default: () => ["First Name", "Last Name", "Your e-mail"],
    },
    passwordInputsLabels: {
      type: Array,
      default: () => ["Current Password", "New Password", "Repeat Password"],
    },
    personalDataDescription: {
      type: String,
      default:
        "Feel free to edit any of your details below so your account is always up to date",
    },
    saveButtonText: {
      type: String,
      default: "Save changes",
    },
    updateButtonText: {
      type: String,
      default: "Update password",
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    };
  },
  watch: {
    account: {
      handler(value) {
        this.firstName = value.firstName;
        this.lastName = value.lastName;
        this.email = value.email;
      },
      immediate: true,
    },
  },
  methods: {
    updatePersonal() {
      const personal = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      this.$emit("update:personal", personal);
    },
    updatePassword() {
      const password = {
        password: this.newPassword,
      };
      this.$emit("update:password", password);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfMyProfile.scss";
</style>
