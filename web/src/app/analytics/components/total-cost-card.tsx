"use client";
import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const TotalCostCard = () => {
  return (
    <Card className="size-full flex items-center justify-center">
      <span className="font-bold text-2xl">Total Cost</span>
      <span className="font-bold text-2xl">$1000</span>
      <div className="w-[50%] h-[20%] flex items-center justify-center rounded-2xl border-4 border-red-500 bg-red-200 font-bold text-red-800">
        <div className="flex flex-row gap-3">
          <ArrowDown />
          12%
        </div>
      </div>
    </Card>
  );
};

export default TotalCostCard;
