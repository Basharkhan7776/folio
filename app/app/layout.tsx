import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/sign-out-button"; // I'll need to create this or use inline form

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
     redirect("/");
  }
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
       <header className="border-b h-16 px-6 flex justify-between items-center bg-card">
          <span className="font-bold text-lg tracking-tight">Folio App</span>
          <div className="flex gap-4 items-center">
             <span className="text-sm text-muted-foreground">
                {session.user?.email}
             </span>
             {/* Inline SignOut Button */}
             <form
                action={async () => {
                  "use server";
                  const { signOut } = await import("@/lib/auth");
                  await signOut();
                }}
              >
                <button type="submit" className="text-sm font-medium text-red-500 hover:underline">
                  Sign Out
                </button>
              </form>
          </div>
       </header>
       <div className="flex-1">
        {children}
       </div>
    </div>
  );
}