import AverageLatencyCard from "./components/average-latency-card";
import RequestRateCard from "./components/throughput-card";
import TokenRateCard from "./components/token-rate-card";
import TotalCostCard from "./components/total-cost-card";
import TotalRequestCard from "./components/total-request-card";
import UserFeedbackPieChart from "./components/user-feedback-chart";
import UserSentimentPieChart from "./components/user-sentiment-chart";

export default function Analytics() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[97%] h-[95%] flex flex-col gap-5">
        <div className="w-full h-[40%] flex flex-row gap-5">
          <TotalRequestCard />
          <TotalCostCard />
          <AverageLatencyCard />
          <RequestRateCard />
          <TokenRateCard />
        </div>
        <div className="w-full h-[56%] flex flex-row gap-5">
          <UserFeedbackPieChart />
          <UserSentimentPieChart />
        </div>
      </div>
    </div>
  );
}
