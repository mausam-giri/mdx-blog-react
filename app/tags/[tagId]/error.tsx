"use client"; // Error components must be Client components

import { useEffect } from "react";
import ErrorShared from "@/app/shared/error.shared";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorShared reset={reset} />;
}
