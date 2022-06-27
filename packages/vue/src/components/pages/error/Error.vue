<template>
  <div id="error">
    <AwImage
      class="image desktop-only"
      :src="require('@storefront-ui/shared/icons/error.svg')"
      alt="Page Not Found"
      :width="412"
      :height="412"
    />
    <AwImage
      class="image--mobile smartphone-only"
      :src="require('@storefront-ui/shared/icons/error.svg')"
      alt="Page Not Found"
      :width="230"

      :height="230" 
    />
    <AwHeading
      title="Page not found"
      :level="1"
      description="We are sorry that we can’t find the page, please go back or try again"
      class="heading sf-heading--no-underline"
    />
    <div class="actions">
      <AwButton class="sf-button--full-width actions__button">
        Return home
      </AwButton>
      <AwButton class="sf-button--full-width sf-button--text actions__button">
        Back
      </AwButton>
    </div>
  </div>
</template>
<script>
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwHeading from "../../atoms/AwHeading/AwHeading.vue";

export default {
  name: "Error",
  components: { AwButton, AwImage, AwHeading },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#error {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    margin: 0 auto;
    max-width: 1272px;
  }
}
.image {
  --image-width: 14.375rem;
  padding: var(--spacer-xl) 0 var(--spacer-sm);
  @include for-desktop {
    --image-width: 25.75rem;
  }
}
.heading {
  --heading-title-margin: 0 0 var(--spacer-sm);
  --heading-title-color: var(--c-primary);
  --heading-title-font-weight: var(--font-weight--semibold);
  --heading-title-font-size: var(--h2-font-size);
  --heading-description-color: var(--c-text-muted);
  --heading-description-font-size: var(--font-size--base);
  --heading-description-margin: 0 var(--spacer-base);
  --heading-description-font-family: var(--font-family--primary);
  @include for-desktop {
    --heading-description-margin: 0;
  }
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  margin: var(--spacer-xl) 0 0 0;
  &__button {
    &:last-child {
      margin: var(--spacer-sm) 0;
    }
  }
  @include for-desktop {
    margin: var(--spacer-lg) 0 0 0;
    &__button {
      --button-width: 25rem;
    }
  }
}
</style>

<include-source />
