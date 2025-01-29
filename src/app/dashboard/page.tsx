import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { DashboardMetricsAlt } from "@/components/DashboardMetricsAlt";

export default async function DashboardPage() {
   return (
      <div className='space-y-4'>
         {/* <Suspense fallback={<Skeleton className='h-32' />}>
            <DashboardMetrics />
         </Suspense>
         <Suspense fallback={<Skeleton className='h-32' />}>
            <DashboardMetricsAlt />
         </Suspense> */}
         <DashboardMetrics />
         <DashboardMetricsAlt />
      </div>
   );
}
