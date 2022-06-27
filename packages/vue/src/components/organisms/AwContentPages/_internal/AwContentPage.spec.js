import { shallowMount } from "@vue/test-utils";
import AwContentPage from "./AwContentPage.vue";
describe("AwContentPage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount({
      template: '<AwContentPage class="sf-content-page" title="jest"/>',
      components: {
        AwContentPage,
      },
      data() {
        return {
          items: [],
        };
      },
      provide: {
        provided: {
          active: "jest",
        },
      },
    });
    expect(component.classes("sf-content-page")).toBe(true);
  });
  it("compares page title and provided active with different casing correctly", () => {
    const testClass = "visible-when-active";
    const component = shallowMount(AwContentPage, {
      slots: {
        default: `<div class="${testClass}" />`,
      },
      propsData: {
        title: "My Title",
      },
      provide: {
        provided: {
          active: "my title",
        },
      },
      parentComponent: {
        data() {
          return {
            items: [],
          };
        },
      },
    });
    const testDiv = component.find(`.${testClass}`);
    expect(testDiv.exists()).toBe(true);
  });
});
