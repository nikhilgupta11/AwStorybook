import { mount } from "@vue/test-utils";
import AwHeroItem from "./AwHeroItem.vue";
import AwButton from "../../../atoms/AwButton/AwButton";
const title = "title_single";
const subtitle = "subtitle_single";
const buttonText = "button_single";
const background = "rgb(236, 239, 241)";
const image = "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png";
describe("AwHeroItem.vue", () => {
  describe("with items passed as props", () => {
    let component;
    beforeEach(() => {
      component = mount(AwHeroItem, {
        propsData: {
          title,
          subtitle,
          buttonText,
          background,
          image,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders a component", () => {
      expect(component.classes("sf-hero-item")).toBe(true);
    });
    it("renders title correctly", () => {
      expect(component.text()).toContain(title);
    });
    it("renders subtitle correctly", () => {
      expect(component.text()).toContain(subtitle);
    });
    it("renders SfButton correctly", () => {
      expect(component.findComponent(AwButton).text()).toContain(buttonText);
    });
  });
  describe("with items passed through slots", () => {
    let component;
    beforeEach(() => {
      component = mount(AwHeroItem, {
        slots: {
          title: `<div>${title}</div>`,
          subtitle: `<div>${subtitle}</div>`,
          "call-to-action": `<div>halabala</div>`,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders 'title' slot correctly", () => {
      expect(component.text()).toContain(title);
    });
    it("renders 'subtitle' slot correctly", () => {
      expect(component.text()).toContain(subtitle);
    });
    it("renders 'call-to-action' slot correctly", () => {
      expect(component.text()).toContain("halabala");
    });
  });
});
