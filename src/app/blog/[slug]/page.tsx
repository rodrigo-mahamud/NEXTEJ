import { Suspense } from "react";
import connectDB from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ViewCounter from "@/components/ViewCounter";

async function getBlog(slug: string) {
   await connectDB();
   const blog = await Blog.findOne({ slug });
   return JSON.parse(JSON.stringify(blog));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
   const blog = await getBlog(params.slug);

   return (
      <div className='container mx-auto p-6'>
         <Card>
            <CardHeader>
               <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
               <div className='prose max-w-none'>{blog.content}</div>
               <div className='mt-6'>
                  <Suspense fallback={<p>Loading view counter...</p>}>
                     <ViewCounter slug={params.slug} />
                  </Suspense>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
