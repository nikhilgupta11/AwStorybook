<template>
  <div class="sf-store">
    <slot name="distance">
      <div :class="{ 'display-none': !distance }" class="sf-store__distance">
        <span>{{ distance }}km</span> away from you
      </div>
    </slot>
    <div :class="{ 'sf-store__media': picture }" @click="centerOn(latlng)">
      <slot name="media">
        <AwImage
          v-if="picture"
          :src="picture"
          :alt="`${name} picture`"
          :width="pictureWidth"
          :height="pictureHeight"
        />
        <AwIcon v-else icon="marker" class="sf-store__icon" />
      </slot>
    </div>
    <div class="sf-store__info">
      <div class="sf-store__heading">
        <slot name="heading">
          <div class="sf-store__name">
            {{ name }}
          </div>
        </slot>
      </div>
      <slot>
        <div :class="{ 'display-none': !address }" class="sf-store__address">
          {{ address }}
        </div>
        <AwCharacteristic
          :class="{ 'display-none': !phone }"
          icon="phone"
          size-icon="16px"
          class="sf-store__property"
        >
          <template #text>
            <a
              v-focus
              :href="`tel:${phone}`"
              tabindex="0"
              class="sf-store__property-link"
              >{{ phone }}</a
            >
          </template>
        </AwCharacteristic>
        <AwCharacteristic
          :class="{ 'display-none': !email }"
          icon="mail"
          size-icon="16px"
          class="sf-store__property"
        >
          <template #text>
            <a
              v-focus
              :href="`mailto:${email}`"
              tabindex="0"
              class="sf-store__property-link"
              >{{ email }}</a
            >
          </template>
        </AwCharacteristic>
      </slot>
    </div>
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives";
import AwImage from "../../../atoms/AwImage/AwImage.vue";
import AwIcon from "../../../atoms/AwIcon/AwIcon.vue";
import AwCharacteristic from "../../../molecules/AwCharacteristic/AwCharacteristic.vue";
export default {
  name: "AwStore",
  inject: [
    "registerStore",
    "removeStore",
    "centerOn",
    "locatorData",
    "getGeoDistance",
  ],
  components: {
    AwImage,
    AwCharacteristic,
    AwIcon,
  },
  directives: {
    focus: focus,
  },
  props: {
    latlng: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default: null,
    },
    pictureWidth: {
      type: [Number, String],
      default: null,
    },
    pictureHeight: {
      type: [Number, String],
      default: null,
    },
    address: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
  },
  computed: {
    distance() {
      if (this.locatorData && this.locatorData.userPosition) {
        const dictLatLng = {
          lat: this.latlng[0],
          lng: this.latlng[1],
        };
        return this.getGeoDistance(this.locatorData.userPosition, dictLatLng);
      }
      return null;
    },
  },
  created() {
    if (this.registerStore) {
      this.registerStore(this.$props);
    }
  },
  beforeDestroy() {
    if (this.removeStore) {
      this.removeStore(this.$props);
    }
  },
};
</script>
