<template>
  <composition :composition="composition">
    <pre>{{ paths }}</pre>
    <slot-content slot-name="components" />
  </composition>
</template>

<script>
import fetch from "isomorphic-unfetch";
import { enhancers } from "../enhancers";
import {
  Composition,
  SlotContent,
  CANVAS_COMPOSITION_TYPE,
  CANVAS_SLOT_CONTENT_TYPE,
} from "@uniformdev/canvas-vue";
import { CanvasClient, CANVAS_DRAFT_STATE, enhance } from "@uniformdev/canvas";

export default {
  name: "IndexPage",
  components: {
    [CANVAS_COMPOSITION_TYPE]: Composition,
    [CANVAS_SLOT_CONTENT_TYPE]: SlotContent,
  },
  async asyncData() {
    const client = new CanvasClient({
      apiKey: process.env.UNIFORM_API_KEY,
      projectId: process.env.UNIFORM_PROJECT_ID,
      apiHost: process.env.UNIFORM_API_HOST,
      fetch,
    });

    const { composition } = await client.getCompositionBySlug({
      slug: "/test",
      state: CANVAS_DRAFT_STATE,
    });

    const context = {
      preview: false,
    };

    await enhance({
      composition,
      enhancers,
      context,
    });

    const list = await client.getCompositionList({
      state: CANVAS_DRAFT_STATE,
    });

    const paths = list.compositions
      .map((c) => c.composition._slug)
      .filter((slug) => slug);

    return { composition, paths };
  },
};
</script>
