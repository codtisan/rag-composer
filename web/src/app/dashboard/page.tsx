import LatencyAreaChart from "./components/latency-chart";
import ModelCostBarChart from "./components/model-cost-chart";
import ModelUsageBarChart from "./components/model-usage-chart";
import RequestAreaChart from "./components/request-chart";

export default function Dashboard() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[97%] h-[95%] flex flex-col gap-5">
        <div className="w-full h-[48%] flex flex-row gap-5">
          <RequestAreaChart />
          <LatencyAreaChart />
        </div>
        <div className="w-full h-[48%] flex flex-row gap-5">
          <ModelUsageBarChart />
          <ModelCostBarChart />
        </div>
      </div>
    </div>
  );
}
