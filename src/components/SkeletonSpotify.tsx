import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSpotify() {
   return (
      <div className='w-full'>
         <div className='space-y-4'>
            <Skeleton className='w-full aspect-square rounded-lg' />
            <div className='space-y-2'>
               <Skeleton className='h-7 w-3/5' />
               <Skeleton className='h-5 w-2/5' />
               <Skeleton className='h-4 w-1/3' />
               <Skeleton className='h-4 w-10' />
            </div>
         </div>
      </div>
   );
}
