import { useState, useRef, useCallback } from "react";

type Prop = {
  status: "idle" | "pending" | "success" | "failed";
  totalPages: number;
};

const useInfiniteScroll = ({ status, totalPages }: Prop) => {
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>();

  const lastElement = useCallback(
    (node: HTMLElement | null) => {
      if (status === "pending") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [status, page, totalPages]
  );

  return { page, setPage, lastElement };
};

export default useInfiniteScroll;
