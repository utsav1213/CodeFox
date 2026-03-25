import { Button } from "@/components/ui/button";
import { requireAuth } from "@/module/auth/utils/auth-utils";
import Logout from "@/module/auth/components/logout";

export default async function Home() {
  await requireAuth();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Logout>
        <Button>Logout</Button>
</Logout>
    </div>
  );
}
