import { Metric } from "@/models/Metric";
export async function getMetrics(shouldError = false, shouldDelay = false) {
   if (shouldError) {
      throw new Error("Error forzado en getMetrics");
   }
   try {
      if (shouldDelay) {
         await new Promise((resolve) => setTimeout(resolve, 500000000));
      }
      const metrics = await Metric.find({});
      return metrics.map((metric) => ({
         month: metric.month,
         desktop: metric.desktop,
      }));
   } catch (error) {
      console.error("Error fetching metrics:", error);
      return [];
   }
}
