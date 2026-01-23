import { Button } from "@/components/ui/button";

export default function BuilderPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden"> 
      {/* Sidebar */}
      <aside className="w-72 border-r bg-card flex flex-col">
        <div className="p-4 border-b">
            <h2 className="font-semibold">Toolbox</h2>
            <p className="text-xs text-muted-foreground">Drag items to the canvas</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
           {/* Toolbox categories */}
           <div>
             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Profile</h3>
             <div className="grid gap-2">
                <div className="border p-3 rounded-md text-sm bg-background hover:border-primary cursor-move transition-colors shadow-sm">
                    Profile Card
                </div>
                <div className="border p-3 rounded-md text-sm bg-background hover:border-primary cursor-move transition-colors shadow-sm">
                    Bio Section
                </div>
             </div>
           </div>

            <div>
             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Hero</h3>
             <div className="grid gap-2">
                <div className="border p-3 rounded-md text-sm bg-background hover:border-primary cursor-move transition-colors shadow-sm">
                    Simple Hero
                </div>
                 <div className="border p-3 rounded-md text-sm bg-background hover:border-primary cursor-move transition-colors shadow-sm">
                    Split Hero
                </div>
             </div>
           </div>
           
            <div>
             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Projects</h3>
             <div className="grid gap-2">
                <div className="border p-3 rounded-md text-sm bg-background hover:border-primary cursor-move transition-colors shadow-sm">
                    Project Grid
                </div>
             </div>
           </div>
        </div>
      </aside>
      
      {/* Canvas */}
      <main className="flex-1 bg-slate-50/50 p-8 overflow-y-auto relative">
         <div className="max-w-5xl mx-auto min-h-[800px] border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 bg-background/50">
            <p className="mb-4">Your portfolio canvas is empty</p>
            <Button variant="secondary">Add a snippet to start</Button>
         </div>
      </main>
      
      {/* Properties Panel (Optional right sidebar) */}
      <aside className="w-72 border-l bg-card hidden xl:block p-4">
         <h2 className="font-semibold mb-4">Properties</h2>
         <p className="text-sm text-muted-foreground">Select an item to edit its properties.</p>
      </aside>
    </div>
  );
}