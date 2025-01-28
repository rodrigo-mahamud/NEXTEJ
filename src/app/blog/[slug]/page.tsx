import { Suspense } from "react";
import connectDB from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { BlogPostProps } from "@/types/types";
import SpotifyDemo from "@/components/Spotify";
import Image from "next/image";
import { SkeletonSpotify } from "@/components/SkeletonSpotify";

export const experimental_ppr = true;
export const revalidate = 60;
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
      <div className='container mx-auto py-6 md:p-6'>
         <div className='grid md:grid-cols-10 gap-4'>
            <Card className='md:col-span-7'>
               <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <p className='text-sm text-muted-foreground'>By {blog.author}</p>
               </CardHeader>
               <CardContent>
                  <div className='prose max-w-none dark:prose-invert'>
                     {blog.content}

                     {blog.images && blog.images.length > 0 && (
                        <div className='mt-6'>
                           <h3 className='text-lg font-semibold mb-4'>Imágenes</h3>
                           <div className='grid md:grid-cols-2 gap-4'>
                              {blog.images.map((image: string, index: number) => (
                                 <div key={index} className='relative aspect-square'>
                                    <Image
                                       src={image}
                                       alt={`Image ${index + 1} for ${blog.title}`}
                                       fill
                                       quality={35}
                                       sizes='(max-width: 1200px) 55vw, 35vw'
                                       className='object-cover rounded-lg'
                                    />
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>
               </CardContent>
            </Card>
            <Card className='md:col-span-3 sticky top-0 h-fit'>
               <CardHeader>
                  <CardTitle>Spotify aleatorio</CardTitle>
                  <p className='text-sm text-muted-foreground'>By Daft Punk</p>
               </CardHeader>
               <CardContent>
                  <Suspense fallback={<SkeletonSpotify></SkeletonSpotify>}>
                     <SpotifyDemo></SpotifyDemo>
                  </Suspense>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
