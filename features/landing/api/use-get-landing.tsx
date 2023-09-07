import { useQuery } from "@tanstack/react-query";
import { getLanding } from "@api/landing";
import type { Landing } from "@api/landing.types";

export function useGetLanding() {
  return useQuery<Landing, Error>(
    ["landing"], // Query key
    getLanding, // Fetch function
  );
}
