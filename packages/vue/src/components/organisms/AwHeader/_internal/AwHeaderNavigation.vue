<template>
  <div class="sf-header-navigation" v-on="$listeners">
    <div class="sf-header-navigation__menu">
      <slot />
    </div>
    <AwSidebar
      :persistent="true"
      class="sf-header-navigation__sidebar"
      @close="$emit('close')"
    >
      <slot />
    </AwSidebar>
  </div>
</template>
<script>
import AwSidebar from "../../../organisms/AwSidebar/AwSidebar";

export default {
  name: "AwHeaderNavigation",
  components: {
    AwSidebar,
  },
};
</script>
