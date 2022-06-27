<template>
  <transition name="sf-fade">
    <div
      :class="[{ 'display-none': !visible }, colorClass]"
      class="sf-notification"
    >
      <slot name="icon" v-bind="{ icon }">
        <AwIcon
          :class="{ 'display-none': !icon }"
          class="sf-notification__icon"
          :icon="icon"
          size="lg"
          color="white"
        />
      </slot>
      <div>
        <slot name="title" v-bind="{ title }">
          <div
            :class="{ 'display-none': !title }"
            class="sf-notification__title smartphone-only"
          >
            {{ title }}
          </div>
        </slot>
        <slot name="message" v-bind="{ message }">
          <span
            :class="{ 'display-none': !message }"
            class="sf-notification__message"
            >{{ message }}</span
          >
        </slot>
        <slot name="action" v-bind="{ action, actionHandler }">
          <AwButton
            :class="{ 'display-none': !action }"
            class="sf-button--pure sf-notification__action"
            @click="actionHandler"
          >
            {{ action }}
          </AwButton>
        </slot>
      </div>
      <slot name="close" v-bind="{ closeHandler }">
        <AwButton
          :class="{ 'display-none': persistent }"
          aria-label="Close notification"
          class="sf-button--pure sf-notification__close"
          @click="closeHandler"
        >
          <AwIcon icon="cross" color="white" />
        </AwButton>
      </slot>
    </div>
  </transition>
</template>
<script>
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
export default {
  name: "AwNotification",
  components: {
    AwIcon,
    AwButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      },
    },
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";
        case "danger":
          return "info_shield";
        default:
          return "info_circle";
      }
    },
    colorClass() {
      switch (this.type) {
        case "secondary":
          return "color-secondary";
        case "info":
          return "color-info";
        case "success":
          return "color-success";
        case "warning":
          return "color-warning";
        case "danger":
          return "color-danger";
        default:
          return "color-info";
      }
    },
  },
  methods: {
    actionHandler() {
      this.$emit("click:action");
    },
    closeHandler() {
      this.$emit("click:close");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfNotification.scss";
</style>
