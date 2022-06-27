<template>
  <AwRadio v-model="selected" class="sf-address" :value="name" name="groupName">
    <template #label>
      <slot />
    </template>
    <template #checkmark>
      <slot name="icon">
        <div class="sf-address__icon-container">
          <AwIcon icon="check" class="sf-address__icon" />
        </div>
      </slot>
    </template>
  </AwRadio>
</template>
<script>
import AwRadio from "../../AwRadio/AwRadio.vue";
import AwIcon from "../../../atoms/AwIcon/AwIcon.vue";

export default {
  name: "AwAddressPicker",
  components: {
    AwRadio,
    AwIcon,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  inject: ["getSelectedValue", "setSelectedValue"],
  computed: {
    selected: {
      get() {
        return this.getSelectedValue();
      },
      set(newValue) {
        this.setSelectedValue(newValue);
      },
    },
  },
};
</script>
