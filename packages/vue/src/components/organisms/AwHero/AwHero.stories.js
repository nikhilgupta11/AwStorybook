import AwHero from './AwHero.vue';
import AwCimage  from "../../atoms/AwCimage/AwCimage.vue";
import AwHeroItem from "./_internal/AwHeroItem.vue";

export default {
  title: "Components/Organisms/Hero",
  component: AwHeroItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "hero-item-subtitle-font": { value: "", control: "text" },
      "hero-item-subtitle-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "hero-item-subtitle-font-size": {
        value: "var(--h6-font-size)",
        control: "text",
      },
      "hero-item-subtitle-font-line-height": { value: "1.4", control: "text" },
      "hero-item-subtitle-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "hero-item-title-font": { value: "", control: "text" },
      "hero-item-title-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "hero-item-title-font-size": {
        value: "var(--h2-font-size)",
        control: "text",
      },
      "hero-item-title-font-line-height": { value: "1.2", control: "text" },
      "hero-item-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "button-background": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-wrap": {
        value: "normal",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "hero-item-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "--hero-item-button-width": {
        value: "",
        control: "text",
      },
      "--hero-item-button-height": {
        value: "",
        control: "text",
      },
      "--hero-item-button-padding": {
        value: "",
        control: "text",
      },
      "--hero-item-button-color": {
        value: "",
        control: "text",
      },
      "--hero-item-button-transition": {
        value: "",
        control: "text",
      },
      "--hero-item-button-background": {
        value: "",
        control: "text",
      },
      "--hero-item-button-cursor": {
        value: "",
        control: "text",
      },
      "--hero-item-button-wrap": {
        value: "",
        control: "text",
      },
      "--hero-item-button-text-transform": {
        value: "",
        control: "text",
      },
      "--hero-item-button-text-decoration": {
        value: "",
        control: "text",
      },
      "--hero-item-button-border-radius": {
        value: "",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Full-width hero component with autoplay and navigation arrows. Built from main component - AwHero and internal component - AwHeroItem.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-hero-item--position-bg-top-right",
          "sf-hero-item--position-bg-bottom-right",
          "sf-hero-item--position-bg-bottom-left",
          "sf-hero-item--align-right",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    sliderOptions: {
      control: "object",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: `{
            type: "slider",
            rewind: true,
            autoplay: 5000,
            perView: 1,
            gap: 0,
          }`,
        },
      },
      defaultValue: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0,
      },
      description:
        "Slider options from [glide.js documentation](https://glidejs.com/docs/).",
    },
    title: {
      control: "text",
      table: {
        category: "Props for AwHeroItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Hero item title (for AwHeroItem component)",
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props for AwHeroItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Hero item subtitle at the top (for AwHeroItem component)",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props for AwHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Text that will be displayed inside the button. You can replace the button  with 'call- to - action' slot (for AwHeroItem component)",
    },
    background: {
      control: "text",
      table: {
        category: "Props for AwHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Background color (for AwHeroItem component)",
    },
    image: {
      control: "text",
      table: {
        category: "Props for AwHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Background image path(for AwHeroItem component)",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props for AwHeroItem component",
        defaultValue: {
          summary: "null",
        },
      },
      description:
        "Link to be used in button if necessary (for AwHeroItem component)",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `AwHero` component. Use this slot to pass `AwHeroItems` components",
    },
    prev: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwHero` component. Use this slot to pass custom button that moves to the previous item",
    },
    next: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwHero` component. Use this slot to pass custom button that moves to the next item",
    },
    bullets: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwHero` component. Use this slot to pass custom markup for pagination bullets",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwHeroItem` component. Use this slot to replace title element",
    },
    "subtitle ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `AwHeroItem` component. Use this slot to replace subtitle element",
    },
    "call-to-action": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `all-to-action` for `AwHeroItem` component. Use this slot to replace default AwButton component. ",
    },
    withImgTag: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `withImgTag` for `AwHeroItem` component. Slot dedicated to img tags or other components with this tag (e.g. AwImage, AwCimage) that can be used as images for background. If you want to use this slot, make sure that background and image props are NOT provided (in AwHeroItem component). ",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwHero },
  props: Object.keys(argTypes),
  data() {
    return {
      imageTitle: "Colorful summer dresses are already in store",
      imageUrl: "/assets/storybook/SfHero/hero.png",
      imageSubtitle: "Summer Collection 2019",
      imageButtonText: "Learn more",
      imageBackground: "#ECEFF1",
    };
  },
  template: `
  <AwHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <AwHeroItem
        :class="classes"
        :title="imageTitle"
        :subtitle="imageSubtitle"
        :button-text="imageButtonText"
        :image="imageUrl"
        :background="imageBackground"
    />
    <AwHeroItem
        :class="classes"
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2019"
        button-text="Learn more"
        image="/assets/storybook/SfHero/hero.png"
        background="#FCE4EC"
    />
  </AwHero>`,
});

export const Common = Template.bind({});
Common.args = {};

export const WithCloudinaryImage = (args, { argTypes }) => ({
  components: {
    AwHero,
    AwCimage,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      imageTitle: "Colorful summer dresses are already in store",
      imageSubtitle: "Summer Collection 2019",
      imageButtonText: "Learn more",
      cloud: { cloudName: "demo" },
      alt: "animals",
      placeholder: "blur",
      transformations: [
        {
          resize: {
            width: 1240,
            height: 586,
            type: "fill",
          },
          gravity: "center",
        },
      ],
    };
  },
  template: `
  <AwHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <AwHeroItem
      :class="classes"
      :title="imageTitle"
      :subtitle="imageSubtitle"
      :button-text="imageButtonText"
    >
      <template #withImgTag>
        <AwCimage
          public-id="dog"
          :cloud="cloud"
          :alt="alt"
          :placeholder="placeholder"
          :transformations="transformations"
        />
      </template>
    </AwHeroItem>
    <AwHeroItem
      :class="classes"
      title="Colorful summer dresses are already in store"
      subtitle="Summer Collection 2019"
      button-text="Learn more"
    >
      <template #withImgTag>
        <AwCimage
          public-id="brown_sheep"
          :cloud="cloud"
          :alt="alt"
          :placeholder="placeholder"
          :transformations="transformations"
        />
      </template>
    </AwHeroItem>
  </AwHero>`,
});
WithCloudinaryImage.args = { ...Common.args };
