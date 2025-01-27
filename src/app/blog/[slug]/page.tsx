import { Suspense } from "react";
import connectDB from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import ViewCounter from "@/components/ViewCounter";
import { BlogPostProps } from "@/types/types";

// Función para generar los parámetros estáticos
export async function generateStaticParams() {
   await connectDB();
   const blogs = await Blog.find({}, { slug: 1 });

   return blogs.map((blog) => ({
      slug: blog.slug,
   }));
}

async function getBlog(slug: string) {
   await connectDB();
   const blog = await Blog.findOne({ slug });

   if (!blog) {
      notFound();
   }

   return JSON.parse(JSON.stringify(blog));
}

export default async function BlogPost({ params }: BlogPostProps) {
   const { slug } = await params;
   const blog = await getBlog(slug);

   return (
      <div className='container mx-auto p-6'>
         <Card>
            <CardHeader>
               <CardTitle>{blog.title}</CardTitle>
               <p className='text-sm text-muted-foreground'>By {blog.author}</p>
            </CardHeader>
            <CardContent>
               <div className='prose max-w-none dark:prose-invert'>{blog.content}</div>
               <div className='mt-6'>
                  <Suspense fallback={<p>Loading view counter...</p>}>
                     <ViewCounter slug={slug} />
                  </Suspense>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}
