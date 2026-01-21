import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container-custom h-screen flex items-center justify-center">
        <h1>404 - Page Not Found</h1>
      </div>
      <Button>
        <Link href="/">
          <Home />
        </Link>
      </Button>
    </main>
  );
}
