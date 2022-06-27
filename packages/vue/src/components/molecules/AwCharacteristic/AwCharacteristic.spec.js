import { shallowMount } from "@vue/test-utils";
import AwCharacteristic from "./AwCharacteristic.vue";
describe.only("AwCharacteristic.vue", () => {
  it("renders a characteristic", () => {
    const component = shallowMount(AwCharacteristic);
    expect(component.classes("sf-characteristic")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const icon = "<svg class='sf-characteristic'></svg>";
    const component = shallowMount(AwCharacteristic, {
      slots: {
        icon,
      },
    });
    expect(component.classes("sf-characteristic")).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const title = "<p class='sf-characteristic__title'></p>";
    const component = shallowMount(AwCharacteristic, {
      slots: {
        title,
      },
    });
    expect(component.find(".sf-characteristic__title").exists()).toBe(true);
  });
  it("renders slot with icon when passed", () => {
    const description = "<p class='sf-characteristic__description'></p>";
    const component = shallowMount(AwCharacteristic, {
      slots: {
        description,
      },
    });
    expect(component.find(".sf-characteristic__description").exists()).toBe(
      true
    );
  });
});
