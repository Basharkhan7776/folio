import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container-custom h-screen flex items-center justify-center">
        <Card className="w-xl h-96 flex gap-1 items-center justify-center">
          <Button>
            <Link href="/app">Continue with Google</Link>
          </Button>
          <div className="flex gap-2">
            <Link href="/snippets" className="underline">
              Explore snippets
            </Link>
            <p>or</p>
            <Link href="/templates" className="underline">
              Explore templates
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
