"use client";
import { ErrorProps } from "@/types/ErrorProps";

// Error boundaries must be Client Components

function GlobalError({ reset }: ErrorProps) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

export default GlobalError;
