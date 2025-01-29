import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function HrPage() {
   return (
      <div className='p-4 bg-red-800/50 rounded-lg'>
         <Button variant='default' asChild className='h-fit mb-1'>
            <Link href={"/dashboard"}>
               <ArrowLeftIcon />
               Volver
            </Link>
         </Button>
         <h2 className='text-xl font-bold mb-4'>Equipo de Ventas</h2>
         <ul className='space-y-2'>
            <li>Ana García - Desarrolladora</li>
            <li>Carlos Ruiz - Diseñador</li>
            <li>María López - Product Manager</li>
         </ul>
      </div>
   );
}
