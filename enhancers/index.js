import { compose, EnhancerBuilder } from "@uniformdev/canvas";
import {
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
  CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful";
import { contentfulEnhancer } from "./contentful/contentfulEnhancer";
import { contentfulQueryEnhancer } from "./contentful/contentfulQueryEnhancer";
import { contentfulModelConverter } from "./contentful/contentfulModelConverter";

export const enhancers = new EnhancerBuilder()
  .parameterType(
    CANVAS_CONTENTFUL_QUERY_PARAMETER_TYPES,
    compose(contentfulQueryEnhancer(), contentfulModelConverter)
  )
  .parameterType(
    CANVAS_CONTENTFUL_PARAMETER_TYPES,
    compose(contentfulEnhancer(), contentfulModelConverter)
  );
