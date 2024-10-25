import { Layout } from "@/types/Layout";

async function RSLayour({ children }: Layout) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}

export default RSLayour;
