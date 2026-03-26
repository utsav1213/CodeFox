//in future i will create landing page for me 
import { requireAuth } from "@/module/auth/utils/auth-utils";
import { redirect } from "next/navigation";
export default async function Home() {
  await requireAuth();
  return redirect('/dashboard')
  ;
}
