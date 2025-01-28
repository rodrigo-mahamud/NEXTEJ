"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function DashboardError({ reset }: { error: Error; reset: () => void }) {
   return (
      <Alert variant='destructive' className='bg-red-600/10'>
         <AlertDescription>
            <p className='mb-4 text-foreground'>Algo salió mal!</p>
            <Button onClick={() => reset()}>Intentar de nuevo</Button>
         </AlertDescription>
      </Alert>
   );
}
