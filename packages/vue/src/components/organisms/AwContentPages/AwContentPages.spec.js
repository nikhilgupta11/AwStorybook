import { mount, createLocalVue } from "@vue/test-utils";
import AwContentPages from "@/components/organisms/AwContentPages/AwContentPages.vue";
import AwContentPage from "./_internal/AwContentPage.vue";
const localVue = createLocalVue();
localVue.component("AwContentPage", AwContentPage, {
  inject: ["provided"],
});
describe("AwContentPages.vue", () => {
  it("renders a component", () => {
    const component = mount(AwContentPages, {
      localVue,
      provide: {
        provided() {
          return { active: "true" };
        },
      },
    });
    expect(component.classes("sf-content-pages")).toBe(true);
  });

  it("marks menu-item slot as active when active and page.title casing differs", () => {
    const component = mount(AwContentPages, {
      propsData: {
        active: "My Title",
      },
      data() {
        return {
          items: [{ title: "my title" }],
        };
      },
    });

    const menuItem = component.find(".sf-content-pages__menu");
    expect(menuItem.classes()).toContain("is-active");
  });
});
