import { auth, signIn } from "@/lib/auth";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session)
    await signIn("google", {
      redirectTo: "/dashboard",
    });

  if (session) return children;

  return <>Error</>;
}
