import { LLMModelsModel } from "@/models/llm-models-model";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ModelIcon from "@/app/llm-models/components/model-icon";

export type ModelBlocksProps = {
  llmModel: LLMModelsModel;
};

const ModelBlocks = ({ llmModel }: ModelBlocksProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[23%] h-[30%] rounded-3xl bg-white border-2 border-gray-300 hover:bg-sky-100 flex flex-row items-center">
          <ModelIcon modelName={llmModel.modelName} />
          <Label className="text-black text-xl font-bold ">
            {llmModel.modelName}
          </Label>
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{llmModel.modelName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Provider</Label>
            <div>{llmModel.provider}</div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Size</Label>
            <div>{llmModel.size} GB</div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Token Usage</Label>
            <div>{llmModel.tokenUsage}</div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Total Cost</Label>
            <div>${llmModel.totalCost}</div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Context Window</Label>
            <div>{llmModel.context}</div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">Input</Label>
            <div className="flex flex-row gap-5">
              {llmModel.input.map((input) => {
                return <div key={input}>{input}</div>;
              })}
            </div>
          </div>
          <div className="grid gap-0 grid-cols-2">
            <Label htmlFor="name-1">API Key</Label>
            <div>
              {llmModel.apiKey.slice(0, 5)}******{llmModel.apiKey.slice(-5)}
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ModelBlocks);
