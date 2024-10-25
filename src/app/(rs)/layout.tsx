import { Header } from "@/components/Header";
import { Layout } from "@/types/Layout";

async function RSLayout({ children }: Layout) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}

export default RSLayout;
