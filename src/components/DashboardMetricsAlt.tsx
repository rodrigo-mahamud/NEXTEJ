import { getMetrics } from "@/actions/getMetrics";
import { ChartArea } from "@/components/ui/chart-area";

export async function DashboardMetricsAlt() {
   const metrics = await getMetrics(false, false);

   return (
      <div className='w-full'>
         <ChartArea data={metrics} />
      </div>
   );
}
