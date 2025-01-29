import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeamPage() {
   return (
      <div className='p-4 bg-blue-800/20 rounded-lg'>
         <h2 className='text-xl font-bold mb-4'>Equipo</h2>
         <div className='space-x-4'>
            <Button variant='outline' className='bg-foreground/15' asChild>
               <Link href='dashboard/sales'>Ventas</Link>
            </Button>
            <Button variant='outline' className='bg-foreground/15' asChild>
               <Link href='dashboard/hr'>Recursos Humanos</Link>
            </Button>
         </div>
      </div>
   );
}
