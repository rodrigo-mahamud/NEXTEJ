// src/models/Metric.ts
import { Schema, model, models } from "mongoose";

const MetricSchema = new Schema({
   month: {
      type: String,
      required: true,
   },
   desktop: {
      type: Number,
      required: true,
   },
});

export const Metric = models.Metric || model("Metric", MetricSchema);
