import type { V2_MetaFunction } from "@remix-run/node";

const generateMeta = (title: string): V2_MetaFunction => {
  return () => {
    return [
      { title: `${title} | Remix Routing V2` },
      {
        property: "og:title",
        content: title,
      },
      {
        name: "description",
        content: "App to visualize remix routing version 2",
      },
    ];
  };
};
export default generateMeta;
