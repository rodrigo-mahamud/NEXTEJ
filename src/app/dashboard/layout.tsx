import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function DashboardLayout({
   children,
   team,
   analytics,
}: {
   children: React.ReactNode;
   team: React.ReactNode;
   analytics: React.ReactNode;
}) {
   return (
      <div className='flex flex-col min-h-screen bg-background'>
         <div className='p-4 space-y-4'>
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
            {/* <div className='col-span-1'>{team}</div>
            <div className='col-span-1 md:col-span-2'>{analytics}</div> */}
            {children}
         </div>
      </div>
   );
}
