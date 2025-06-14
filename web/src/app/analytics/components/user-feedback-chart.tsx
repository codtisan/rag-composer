"use client";
import { Card } from "@/components/ui/card";
import { UserFeedbackChartSample } from "@/constants/charts";
import ReactECharts from "echarts-for-react";

const UserFeedbackPieChart = () => {
  return (
    <Card className="size-full">
      <ReactECharts option={UserFeedbackChartSample} />
    </Card>
  );
};

export default UserFeedbackPieChart;
