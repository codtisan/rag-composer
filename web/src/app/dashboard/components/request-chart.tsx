"use client";
import { Card } from "@/components/ui/card";
import { RequestChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const RequestAreaChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={RequestChartSample} />
    </Card>
  );
};

export default RequestAreaChart;
