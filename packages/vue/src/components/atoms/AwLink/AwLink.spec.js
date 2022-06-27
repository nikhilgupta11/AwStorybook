import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import AwLink from "./AwLink.vue";
const localVue = createLocalVue();
localVue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: AwLink,
  },
];
const router = new VueRouter({
  routes,
});

describe("AwLink.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(AwLink);
    expect(wrapper.classes("sf-link")).toBe(true);
  });
  it("renders component with internal link", () => {
    const wrapper = mount(AwLink, {
      localVue,
      router,
      propsData: {
        link: "/home",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
  it("renders component with external link", () => {
    const wrapper = mount(AwLink, {
      localVue,
      router,
      propsData: {
        link: "www.example.com",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
});
