import { shallowMount } from "@vue/test-utils";
import AwHero from "./AwHero.vue";
import AwHeroItem from "./_internal/AwHeroItem.vue";
import AwArrow from "../../atoms/AwArrow/AwArrow.vue";
import AwBullets from "../../atoms/AwBullets/AwBullets.vue";
const items = [
  {
    title: "title_1",
    subtitle: "subtitle_1",
    buttonText: "button_1",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
  {
    title: "title_2",
    subtitle: "subtitle_2",
    buttonText: "button_2",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
  {
    title: "title_3",
    subtitle: "subtitle_3",
    buttonText: "button_3",
    background: "#eceff1",
    image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png",
  },
];
const defaultSlot = `
<template>
  <div v-for="(item, index) in items">
    <AwHeroItem
      :title="item.title"
      :subtitle="item.subtitle"
      :buttonText="item.buttonText"
      :background="item.background"
      :image="item.image"
    />
  </div>
</template>`;
describe("AwHero.vue", () => {
  describe("with items array passed as props", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(AwHero, {
        mocks: {
          items,
        },
        slots: {
          default: defaultSlot,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders a component", () => {
      expect(component.classes("Aw-hero")).toBe(true);
    });
    it("renders three AwHeroItem components when passed three items", () => {
      expect(component.findAllComponents(AwHeroItem)).toHaveLength(
        items.length
      );
    });
    it("renders two AwArrow components", () => {
      expect(component.findAllComponents(AwArrow)).toHaveLength(2);
    });
    it("renders AwBullets component", () => {
      expect(component.findAllComponents(AwBullets)).toHaveLength(1);
    });
  });
  describe("with 'prev' and 'next' slots populated", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(AwHero, {
        mocks: {
          items,
        },
        slots: {
          default: defaultSlot,
        },
        scopedSlots: {
          prev: `<button class="forPrevSlot" @click="props.go()"></button>`,
          next: `<button class='forNextSlot' @click="props.go()"></button>`,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("renders 'prev' and 'next' slots instead of AwArrow", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      expect(component.find(".forPrevSlot").exists()).toBe(true);
      expect(component.find(".forNextSlot").exists()).toBe(true);
      expect(component.findAllComponents(AwArrow)).toHaveLength(0);
    });
    it("calls #go with 'prev' when clicked on 'prev' slot", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forPrevSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("prev");
    });
    it("calls #go with 'next' when clicked on 'next' slot", () => {
      jest.spyOn(component.vm, "go");
      expect(component.vm.go).not.toHaveBeenCalled();
      component.find(".forNextSlot").trigger("click");
      expect(component.vm.go).toHaveBeenCalledWith("next");
    });
  });
  describe("with items array of length 1 passed as props", () => {
    let component;
    beforeEach(() => {
      component = shallowMount(AwHero, {
        mocks: {
          items: [items[0]],
        },
        slots: {
          default: defaultSlot,
        },
      });
    });
    afterEach(() => {
      component.destroy();
    });
    it("doesn't render any AwArrow components if only one item passed as prop", () => {
      expect(
        component.find(".sf-hero__control--left").classes("display-none")
      ).toBe(true);
      expect(
        component.find(".sf-hero__control--right").classes("display-none")
      ).toBe(true);
    });
    it("doesn't render SfBullets component if only one item passed as prop", () => {
      expect(component.find(".sf-hero__bullets").classes("display-none")).toBe(
        true
      );
    });
  });
  describe("with using default slot", () => {
    it("renders AwHeroItem component", () => {
      const component = shallowMount(AwHero, {
        slots: {
          default: "<AwHeroItem></AwHeroItem>",
        },
      });
      expect(component.findAllComponents(AwHeroItem)).toHaveLength(1);
    });
  });
});
