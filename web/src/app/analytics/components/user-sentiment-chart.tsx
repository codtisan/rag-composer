"use client";
import { Card } from "@/components/ui/card";
import { UserSentimentChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const UserSentimentPieChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={UserSentimentChartSample} />
    </Card>
  );
};

export default UserSentimentPieChart;
