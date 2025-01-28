// components/dashboard/chart-area.tsx
"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ChartAreaProps {
   data: Array<{
      month: string;
      desktop: number;
   }>;
}

const chartConfig = {
   desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
   },
} satisfies ChartConfig;

export function ChartArea({ data }: ChartAreaProps) {
   // Calculamos el porcentaje de tendencia
   const currentMonth = data[data.length - 1]?.desktop || 0;
   const previousMonth = data[data.length - 2]?.desktop || 0;
   const trend = (((currentMonth - previousMonth) / previousMonth) * 100).toFixed(1);

   return (
      <Card>
         <CardHeader>
            <CardTitle>Visitors Chart</CardTitle>
            <CardDescription>Monthly desktop visitors</CardDescription>
         </CardHeader>
         <CardContent>
            <ChartContainer config={chartConfig}>
               <AreaChart
                  data={data}
                  margin={{
                     left: 12,
                     right: 12,
                  }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
                  <Area dataKey='desktop' type='natural' fill='var(--color-desktop)' fillOpacity={0.4} stroke='var(--color-desktop)' />
               </AreaChart>
            </ChartContainer>
         </CardContent>
         <CardFooter>
            <div className='flex w-full items-start gap-2 text-sm'>
               <div className='grid gap-2'>
                  <div className='flex items-center gap-2 font-medium leading-none'>
                     Trending {Number(trend) > 0 ? "up" : "down"} by {Math.abs(Number(trend))}% this month
                     <TrendingUp className='h-4 w-4' />
                  </div>
                  <div className='flex items-center gap-2 leading-none text-muted-foreground'>January - June 2024</div>
               </div>
            </div>
         </CardFooter>
      </Card>
   );
}
