import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function DashboardLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
   return (
      <div className='flex flex-col min-h-screen bg-background'>
         <div className='p-4 space-y-4'>
            {/* Navegación del dashboard */}
            <nav className='space-y-2'>
               <Tabs defaultValue='account' className='w-[400px]'>
                  <TabsList className='grid w-full grid-cols-2'>
                     <TabsTrigger className='bg-card border border-border py-2 ' value='account'>
                        Account
                     </TabsTrigger>
                     <TabsTrigger className='bg-card border border-border py-2 ' value='password'>
                        Password
                     </TabsTrigger>
                  </TabsList>
               </Tabs>
            </nav>
            {children}
         </div>

         {modal && (
            <Sheet>
               <SheetContent>
                  <SheetHeader>
                     <SheetTitle>Modal Content</SheetTitle>
                  </SheetHeader>
                  {modal}
               </SheetContent>
            </Sheet>
         )}
      </div>
   );
}
