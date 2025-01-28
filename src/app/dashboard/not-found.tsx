// app/dashboard/not-found.tsx
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardNotFound() {
   return (
      <Card className='mx-auto max-w-md'>
         <CardHeader>
            <CardTitle className='text-center'>404 - Página no encontrada</CardTitle>
         </CardHeader>
         <CardContent className='text-center space-y-4'>
            <p className='text-muted-foreground'>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
         </CardContent>
         <CardFooter className='flex justify-center'>
            <Button asChild>
               <Link href='/dashboard' className='flex items-center gap-2'>
                  <MoveLeft className='h-4 w-4' />
                  Volver al Dashboard
               </Link>
            </Button>
         </CardFooter>
      </Card>
   );
}
