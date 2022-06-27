import AwSkeleton from "./AwSkeleton.vue";

export default {
  title: "Components/Atoms/Skeleton",
  component: AwSkeleton,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {},
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The skeleton of the component to show instead of target component during loading.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-skeleton--no-animation",
          "sf-skeleton--fade",
          "sf-skeleton--pulsate",
        ],
      },
      table: {
        category: "CSS modifiers",
      },
      description:
        "Classes to define component animation. Also animation can be disabled by `sf-skeleton--no-animation` class.",
    },
    type: {
      control: {
        type: "select",
        options: ["paragraph", "avatar", "input", "button", "image"],
      },
      table: {
        category: "Props",
      },
      defaultValue: "paragraph",
      description:
        "Defines shape for SfSkeleton. Available values: 'paragraph', 'image', 'button', 'input', 'avatar'",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace default skeleton",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AwSkeleton },
  props: Object.keys(argTypes),
  template: `<AwSkeleton :type="type" style="max-width: 500px;" :class="classes" />`,
});

export const Common = Template.bind({});

export const Image = (args, { argTypes }) => ({
  components: { AwSkeleton },
  props: Object.keys(argTypes),
  template: `<AwSkeleton type="image" style="max-width: 500px" :class="classes" />
    `,
});
Image.args = { ...Common.args };

export const ParagrapInputAndButton = (args, { argTypes }) => ({
  components: { AwSkeleton },
  props: Object.keys(argTypes),
  template: `
    <div style="max-width: 500px;">
      <AwSkeleton type="paragraph" :class="classes" />
      <AwSkeleton type="input" :class="classes" />
      <AwSkeleton type="button" style="margin: 0 auto;" :class="classes" />
    </div>`,
});
ParagrapInputAndButton.args = { ...Common.args };

export const AvatarAndParagraphs = (args, { argTypes }) => ({
  components: { AwSkeleton },
  props: Object.keys(argTypes),
  template: `
    <div style="max-width: 300px;">
      <AwSkeleton type="avatar" style="margin: 0 auto;" :class="classes" />
      <AwSkeleton type="paragraph" :class="classes" />
      <AwSkeleton type="paragraph" :class="classes" />
      <AwSkeleton type="paragraph" :class="classes" />
    </div>`,
});
AvatarAndParagraphs.args = { ...Common.args };
