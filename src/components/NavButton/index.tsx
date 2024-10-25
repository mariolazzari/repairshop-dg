import { NavButtonProps } from "./NavButtonProps";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavButton({ icon: Icon, label, href }: NavButtonProps) {
  return (
    <Button
      className="rounded-full"
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
