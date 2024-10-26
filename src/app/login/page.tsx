import {
  // RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

function LoginPage() {
  return (
    <main className="flex flex-col items-center gap-6 p-4 text-4xl h-dvh">
      <h1>Repair Shop</h1>

      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
}

export default LoginPage;
