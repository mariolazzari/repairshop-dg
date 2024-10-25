import Link from "next/link";
import { Home, File, UserRound } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import { ModeToggle } from "../ModeToggle";

export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex items-center h-8 justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={Home} />
          <Link
            className="flex justify-center items-center gap-2 ml-0"
            href="/home"
            title="Home"
          >
            <h1 className="hidden sm:block text-left font-bold m-0 mt-1">
              Computer Repait Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UserRound} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
