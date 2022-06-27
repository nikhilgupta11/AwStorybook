import AwFooter from "./AwFooter.vue";
import AwHeader from "../AwHeader/AwHeader.vue";
import AwList from "../AwList/AwList.vue";
import AwImage from "../../atoms/AwImage/AwImage.vue";
import AwButton from "../../atoms/AwButton/AwButton.vue";
import AwMenuItem from "../../molecules/AwMenuItem/AwMenuItem.vue";
import AwInput from "../../atoms/AwInput/AwInput.vue";
import AwLink from "../../atoms/AwLink/AwLink.vue";

export default {
  title: "Components/Organisms/Footer",
  component: AwFooter,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "footer-column-title-font": { value: "", control: "text" },
      "footer-column-title-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "footer-column-title-font-size": {
        value: "var(--h5-font-size)",
        control: "text",
      },
      "footer-column-title-font-line-height": { value: "1.4", control: "text" },
      "footer-column-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "chevron-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-margin": {
        value: "var(--spacer-base) var(--spacer-xs)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-label-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "image-width": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "image-height": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Footer component. Built from main component - SfFooter and internal components -SfFooterColumn.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    open: {
      control: "array",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "[]",
        },
      },
      description: "Opens footer columns on mobile.",
    },
    column: {
      control: "number",
      defaultValue: 4,
      table: {
        category: "Props for main component",
      },
      description: "Number of columns in footer",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: true,
      description: "Multiple footer columns open at the same time on mobile",
    },
    logo: {
      control: "text",
      description: "Logo url to show on mobile (only for testing puroposes).",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfFooterColumn component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Title of the column in SfFooterColumn component.",
    },
    change: {
      action: "change event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits click event when column title is clicked on mobile mode.It is emitted with the array of opened columns",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfFooter` component. Use this slot to place footer content",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfFooterColumn` component. Use this slot to footer column content",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    AwFooter,
    AwHeader,
    AwList,
    AwImage,
    AwButton,
    AwMenuItem,
    AwInput,
    AwLink,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
      ],
      social: {
        title: "Social",
        pictures: ["facebook", "pinterest", "twitter", "google", "youtube"],
      },
    };
  },
  template: `
    <AwFooter
      :column="column"
      :multiple="multiple"
      :open="open"
      :logo="logo"
      :title="title"
      @change="change"
    >
      <AwFooterColumn v-for="column in columns" :key="column.title" :title="column.title">        
        <AwList>
          <AwListItem v-for="item in column.items" :key="item">
            <AwMenuItem :label="item"/>
          </AwListItem>
        </AwList>      
      </AwFooterColumn>
      <AwFooterColumn :title="social.title" class="desktop-only">
        <AwImage 
          v-for="picture in social.pictures" 
          :key="picture" 
          :src="'/assets/storybook/SfFooter/'+picture+'.svg'" 
          :alt="picture" 
          :width="32"
          :height="32"
          style="width: 32px; height: 32px; margin-right: 4px;"/>
      </AwFooterColumn> 
      <AwFooterColumn title="Language" class="desktop-only">
        <AwButton class="sf-button--pure" style="display: flex; align-self: end; color: white;">
          <AwImage
            src="/assets/storybook/SfFooter/flag.png"
            alt="flag of the USA"
            :width="20"
            :height="20"
            style="margin-right: 10px;"
          />
          English
        </AwButton>
      </AwFooterColumn>
      <AwFooterColumn class="desktop-only">
        <template>
          <div style="display: flex; height: 32px; margin-top: 22px;" >
            <AwInput class="sf-input--outline" type="text" placeholder="Type your email address" style="width: 242px; min-height: auto; font-size: 16px; color: #43464E; background-color: #F1F2F3; --input-border-color: #F1F2F3;"/>
            <AwButton style="width: 116px;">Subscribe</AwButton>
          </div>
        </template>
      </AwFooterColumn>
      <div class="sf-footer-column smartphone-only">
        <div style="display: flex; flex-direction: column; jusify-content: space-around; align-items:center; width: 100%;">
          <div class="sf-footer-column__title" style="align-self: flex-start; width: auto;">
            Social
          </div>
          <div style="display: flex; justify-content: space-around; width: 100%;  margin-bottom: 32px;">
            <AwImage 
              v-for="picture in social.pictures" 
              :key="picture" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" 
              :alt="picture"
              :width="32"
              :height="32"
            />
          </div>
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 38px;">
            <AwInput class="sf-input--outline" type="text" placeholder="Type your email address" style="width: 242px; min-height: auto; height: 32px; font-size: 16px; color: #43464E; background-color: #F1F2F3; --input-border-color: #F1F2F3;"/>
            <AwButton style="width: 116px; height: 32px;">Subscribe</AwButton>
          </div>
          <AwLink link="#">
            <AwImage
              :src="logo"
              :alt="title"
              :width="20"
              :height="20"
              class="sf-footer__bottom-logo"
              style="margin-bottom: 38px;"
            />            
          </AwLink>
        </div>  
      </div>  
    </AwFooter>`,
});

export const Common = Template.bind({});
Common.args = {
  open: ["About us", "Help", "Social"],
  title: "Storefront UI",
  logo: "/assets/logo.svg",
};
