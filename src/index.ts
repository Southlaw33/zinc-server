import { serve } from "@hono/node-server";
import { Hono } from "hono";

type Post = {
  id: string;
  title: string;
};
const posts: Post[] = [
  { id: "1", title: "HEHEHHEHEHE" },
  { id: "2", title: "Second Post" },
  { id: "3", title: "Third Post" },
  { id: "4", title: "Fourth Post" },
  { id: "5", title: "Fifth Post" },
];

const allRoutes = new Hono();
allRoutes.get("/posts", async (c) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return c.json(posts);
});

serve(allRoutes, ({ port }) => {
  console.log(`Server running on http://localhost:${port}`);
});
