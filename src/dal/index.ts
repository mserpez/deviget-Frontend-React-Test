// Data access layer
// Reddit

import { BFF_URL_BASE } from "../constants";

export async function getPosts() {
  const result = await fetch(`${BFF_URL_BASE}/reddit/posts`);
  return await result.json();
}
