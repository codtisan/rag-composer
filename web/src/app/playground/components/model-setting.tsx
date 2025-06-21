import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { llmModelSamples } from "@/constants/llm-models";
import { LLMModelsModel } from "@/models/llm-models-model";

export default function Modelsetting() {
  return (
    <div className="h-full w-[25%] flex items-center justify-center shadow-sm border-r-1">
      <div className="h-[95%] w-[90%] flex flex-col gap-5">
        <div className="text-center font-bold text-2xl">Model Setting</div>
        <div>
          <Label className="font-bold text-1xl">Model</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full">
                Select a Model
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {llmModelSamples.map((llmModel: LLMModelsModel) => {
                return (
                  <DropdownMenuItem key={llmModel.id}>
                    {llmModel.modelName}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="deep-thinking" />
          <Label htmlFor="deep-thinking" className="font-bold text-1xl">
            Deep Thinking
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="web-search" />
          <Label htmlFor="web-search" className="font-bold text-1xl">
            Web Search
          </Label>
        </div>
        <div className="flex flex-col space-x-2 gap-3">
          <Label htmlFor="temperature" className="font-bold text-1xl">
            Temperature
          </Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="flex flex-col space-x-2 gap-3">
          <Label htmlFor="max-length" className="font-bold text-1xl">
            Max Length
          </Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="flex flex-col space-x-2 gap-3">
          <Label htmlFor="topk" className="font-bold text-1xl">
            Top K
          </Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="flex flex-col space-x-2 gap-3">
          <Label htmlFor="topp" className="font-bold text-1xl">
            Top P
          </Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
}
