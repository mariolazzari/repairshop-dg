import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="flex flex-col justify-center items-center gap-4 mx-auto py-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          className="m-0 rounded-xl"
          src="/images/404.png"
          width={300}
          height={300}
          sizes="300px"
          alt="Page not found"
          priority
          title="Page not found"
        />
      </div>
    </div>
  );
}

export default NotFound;
