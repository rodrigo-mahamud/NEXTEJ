import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
   return (
      <div className='space-y-4'>
         <Skeleton className='h-8 w-48' />
         <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Skeleton className='h-32' />
            <Skeleton className='h-32' />
            <Skeleton className='h-32' />
            <Skeleton className='h-32' />
         </div>
      </div>
   );
}
