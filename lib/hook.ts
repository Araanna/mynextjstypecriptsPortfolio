import { useInView } from "react-intersection-observer";

export function useSectionInView(threshold = 0.75) {
  const { ref } = useInView({ threshold });
  return { ref };
}
