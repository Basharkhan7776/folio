import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect("/app");
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gray-50">
        <Card className="w-[400px] p-8 flex flex-col gap-6 items-center shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Folio</h1>
            <p className="text-muted-foreground mt-2">Build your personal portfolio in minutes.</p>
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/app" });
              }}
              className="w-full"
            >
              <Button type="submit" className="w-full" variant="outline">
                Continue with Google
              </Button>
            </form>
            
             <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/app" });
              }}
              className="w-full"
            >
              <Button type="submit" className="w-full" variant="outline">
                Continue with GitHub
              </Button>
            </form>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground mt-4">
            <Link href="/snippets" className="hover:underline hover:text-primary transition-colors">
              Explore snippets
            </Link>
            <span>•</span>
            <Link href="/templates" className="hover:underline hover:text-primary transition-colors">
              Explore templates
            </Link>
          </div>
        </Card>
    </main>
  );
}