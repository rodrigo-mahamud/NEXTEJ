import connectDB from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/types/types";

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogs() {
   await connectDB();
   const blogs = await Blog.find({}).sort({ createdAt: -1 });
   return JSON.parse(JSON.stringify(blogs));
}

export default async function BlogList() {
   const blogs = await getBlogs();

   return (
      <div className='container mx-auto p-6'>
         <h1 className='text-3xl font-bold mb-6'>Blog Posts (ISR Example)</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {blogs.map((blog: IBlog) => (
               <Card key={blog._id}>
                  <CardHeader>
                     <CardTitle>{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className='text-muted-foreground mb-4'>{blog.content.substring(0, 150)}...</p>
                     <Button asChild variant='secondary'>
                        <Link href={`/blog/${blog.slug}`}>Read more</Link>
                     </Button>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   );
}
