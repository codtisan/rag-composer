"use client";
import { Card } from "@/components/ui/card";
import { LatencyChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const LatencyAreaChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={LatencyChartSample} />
    </Card>
  );
};

export default LatencyAreaChart;
