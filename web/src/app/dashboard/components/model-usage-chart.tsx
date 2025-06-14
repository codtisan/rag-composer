"use client";
import { Card } from "@/components/ui/card";
import { ModelUsageChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const ModelUsageBarChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={ModelUsageChartSample} />
    </Card>
  );
};

export default ModelUsageBarChart;
