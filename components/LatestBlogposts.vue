<template>
  <div class="latest-blog-posts-component">
    <fieldset>
      <legend>Enhanced data as prop</legend>
      <pre>{{ uniformData }}</pre>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "LatestBlogposts",
  props: {
    uniformData: {
      type: Object,
      required: true,
    },
  },
};
</script>
