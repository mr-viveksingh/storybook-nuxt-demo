import Button from "@/components/global/Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
};
