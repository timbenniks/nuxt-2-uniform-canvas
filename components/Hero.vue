<template>
  <div class="hero-component">
    <fieldset>
      <legend>Enhanced data as prop</legend>
      <pre>{{ uniformData }}</pre>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "Hero",
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
};
</script>
