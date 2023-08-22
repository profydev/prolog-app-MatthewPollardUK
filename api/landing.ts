import { axios } from "./axios";
import type { Landing } from "./landing.types";

const ENDPOINT = "/content-page/home";

export async function getLanding() {
  const { data } = await axios.get<Landing>(ENDPOINT);
  return data;
}
