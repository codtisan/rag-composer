"use client";
import { Card } from "@/components/ui/card";
import { ModelCostChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const ModelCostBarChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={ModelCostChartSample} />
    </Card>
  );
};

export default ModelCostBarChart;
