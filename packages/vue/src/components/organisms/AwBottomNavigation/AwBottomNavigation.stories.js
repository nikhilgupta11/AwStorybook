import { icons } from "@storefront-ui/vue/icons/icons";
import AwBottomNavigation from "../AwBottomNavigation/AwBottomNavigation.vue";
import AwCircleIcon from "../../atoms/AwCircleIcon/AwCircleIcon.vue";
import AwIcon from "../../atoms/AwIcon/AwIcon.vue";
import AwBottomNavigationItem from "./_internal/AwBottomNavigationItem.vue";

const iconsNames = Object.keys(icons);

export default {
  title: "Components/Organisms/BottomNavigation",
  component: AwBottomNavigationItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "icon-color": {
        value: "var(--c-link)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-size": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "circle-icon-position": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "30em",
      description: {
        component:
          "Full-width fixed bottom navigation component with items and circle icon.  Constructed from main component - SfBottomNavigation and internal components - SfBottomNavigationItem.",
      },
    },
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props for internal component",
        type: {
          summary: ["string", "array"],
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Sets icon type. Icon SVG path(s). It can be single SVG path(string) or array of SVG paths or icon name from our icons list(such as 'added_to_cart`)",
    },
    isActive: {
      control: "boolean",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Sets icon to active",
    },
    iconActive: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "The name of the default active icon",
    },
    label: {
      control: "text",
      table: {
        category: "Props for internal component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Label text",
    },
    iconSize: {
      control: "text",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: "20px",
        },
      },
      defaultValue: "20px",
      description: "Icons size",
    },
    isFloating: {
      control: "boolean",
      table: {
        category: "Props for internal component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Changes icon styling",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfBottomNavigation` component. Use this slot to place `SfBottomNavigationItem` elements",
    },
    "label ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfBottomNavigationItem` component. Use this slot to replace label element",
    },
    "icon ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfBottomNavigationItem` component. Use this slot to replace icon element",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwBottomNavigation },
  props: Object.keys(argTypes),
  data() {
    return {
      items: [
        {
          icon: "menu",
          iconActive: "menu",
          label: "Menu",
        },
        {
          icon: "heart",
          iconActive: "heart",
          label: "Heart",
        },
        {
          icon: "account",
          iconActive: "account",
          label: "Profile",
        },
      ],
      currentIcon: "heart",
      labelProp: "Home",
      iconProp: "home",
      iconActiveProp: "home",
    };
  },
  template: `
  <AwBottomNavigation>
    <AwBottomNavigationItem 
      :icon="iconProp"
      :label="labelProp"
      :icon-active="iconActiveProp"
      :is-active="currentIcon === iconActiveProp"
      @click="currentIcon = iconActiveProp"
    />
    <AwBottomNavigationItem
      v-for="(item, key) in items"
      :key="key"
      :icon="item.icon" 
      :icon-active="item.iconActive"
      :label="item.label"
      icon-size="20px"
      :is-active="currentIcon === item.iconActive"
      @click="currentIcon = item.iconActive"
    />
    <AwBottomNavigationItem
      label="Basket"
      icon="add_to_cart"     
      is-floating
      />
  </AwBottomNavigation>`,
});

export const Common = Template.bind({});
Common.args = {};
