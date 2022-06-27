<template>
  <div class="sf-card">
    <AwImage
      :width="imageWidth"
      :height="imageHeight"
      :src="image"
      :alt="title"
      class="sf-card__image"
    />
    <slot name="details" v-bind="{ title, description, titleLevel }">
      <div class="sf-card__details">
        <AwHeading
          :title-level="titleLevel"
          :title="title"
          class="sf-card__title"
        />
        <p class="sf-card__description">
          {{ description }}
        </p>
      </div>
    </slot>
    <slot name="action">
      <AwButton :link="link" class="sf-card__action" v-on="$listeners">
        {{ buttonText }}
      </AwButton>
    </slot>
  </div>
</template>
<script>
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";

export default {
  name: "AwCard",
  components: {
    AwButton,
    AwHeading,
    AwImage,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      required: true,
    },
    imageHeight: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    titleLevel: {
      type: Number,
      default: 3,
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCard.scss";
</style>
