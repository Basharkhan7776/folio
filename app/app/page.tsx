import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/app/create">Create New Portfolio</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>
        
        <Card>
           <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">My Portfolios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>

        <Card>
           <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saved Snippets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
            <Button asChild variant="outline" size="lg">
            <Link href="/snippets">Browse Community Snippets</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
            <Link href="/templates">Browse Templates</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}