import {
  createContentfulQueryEnhancer,
  ContentfulClientList,
} from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";

export const contentfulQueryEnhancer = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const clientList = new ContentfulClientList({ client });

  return createContentfulQueryEnhancer({
    clients: clientList,
    useBatching: false,
  });
};
