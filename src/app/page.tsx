import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
   return (
      <div className='container mx-auto p-6'>
         <h1 className='text-4xl font-bold mb-8'>Next.js Rendering Patterns Demo</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card>
               <CardHeader>
                  <CardTitle>Blog Section (ISR)</CardTitle>
               </CardHeader>
               <CardContent>
                  <p>Demonstrates Incremental Static Regeneration with blog posts</p>
                  <Link href='/blog' className='text-blue-500 hover:underline'>
                     View Blogs
                  </Link>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle>User Section (SSR)</CardTitle>
               </CardHeader>
               <CardContent>
                  <p>Demonstrates Server-Side Rendering with user profiles</p>
                  <Link href='/user' className='text-blue-500 hover:underline'>
                     View Users
                  </Link>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
