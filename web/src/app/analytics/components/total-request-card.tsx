"use client";
import { Card } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const TotalRequestCard = () => {
  return (
    <Card className="size-full flex items-center justify-center">
      <span className="font-bold text-2xl">Total Request</span>
      <span className="font-bold text-2xl">1000 k</span>
      <div className="w-[50%] h-[20%] flex items-center justify-center rounded-2xl border-4 border-green-500 bg-green-200 font-bold text-green-800">
        <div className="flex flex-row gap-3">
          <ArrowUp />
          12%
        </div>
      </div>
    </Card>
  );
};

export default TotalRequestCard;
