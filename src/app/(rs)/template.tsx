// https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates
import { Layout } from "@/types/Layout";

async function Template({ children }: Layout) {
  return <div className="animate-appear">{children}</div>;
}

export default Template;
