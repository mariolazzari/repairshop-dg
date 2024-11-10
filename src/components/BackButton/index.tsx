"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "../ui/button";

export function BackButton({
  title,
  className,
  variant,
  ...props
}: ButtonProps) {
  const router = useRouter();

  return (
    <Button
      className={className}
      variant={variant}
      onClick={router.back}
      title={title}
      {...props}
    >
      {title}
    </Button>
  );
}
