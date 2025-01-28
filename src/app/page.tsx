import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
   return (
      <div className='container mx-auto p-6'>
         <h1 className='text-4xl font-bold mb-8'>Next.js Rendering Patterns Demo</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card>
               <CardHeader>
                  <CardTitle>Dashboard (APP & ROUTING)</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className='text-muted-foreground'>
                     Ejemplo del routing de Next.js donde se muestra el uso de archivos especiales y su interacción. La sección implementa Server
                     Components para el fetching de datos desde MongoDB, demostración de estados de carga con Suspense y manejo de errores.
                  </p>
                  <Button asChild variant='default' className='mt-4'>
                     <Link href='/dashboard'>Ir al Dashboard</Link>
                  </Button>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Sección de Blog (ISR) - (PPR)</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className='text-muted-foreground'>
                     Ejemplo de Regeneración Estática Incremental donde las páginas se actualizan automáticamente cada 60 segundos. Combina el
                     rendimiento de la generación estática con la frescura del contenido dinámico.
                  </p>
                  <Button asChild variant='default' className='mt-4'>
                     <Link href='/blog'>Ir al blog</Link>
                  </Button>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>Sección de usuarios (SSR)</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className='text-muted-foreground'>
                     Ejemplo de Renderizado del Lado del Servidor que muestra perfiles de usuario actualizados en tiempo real, garantizando datos
                     frescos en cada visita y optimización SEO.
                  </p>
                  <Button asChild variant='default' className='mt-4'>
                     <Link href='/user'>Ver usuarios</Link>
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
