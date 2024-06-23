<script setup>
import { Button } from "@/components/ui/button";
const props = defineProps({
  label: {
    type: String,
    default: "Default",
  },
});
</script>

<template>
  <Button>{{ label }}</Button>
</template>
