<template>
  <div>{{ name }} {{ message }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Muse",
    },
    message: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    chicken: "something",
  }),
  computed: {},
  methods: {},
};
</script>

<style>
</style>