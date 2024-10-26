import Link from "next/link";
import { Home, File, UserRound, LogOut } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import { ModeToggle } from "../ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-20 h-12 p-2 border-b animate-slide bg-background">
      <div className="flex items-center justify-between w-full h-8">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={Home} />
          <Link
            className="flex items-center justify-center gap-2 ml-0"
            href="/home"
            title="Home"
          >
            <h1 className="hidden m-0 mt-1 font-bold text-left sm:block">
              Computer Repait Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UserRound} />
          <ModeToggle />
          <Button
            className="rounded-full"
            variant="ghost"
            size="icon"
            aria-label="Logout"
            title="Logout"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
