import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Separator } from "@/components/ui/separator";
import ReactECharts from "echarts-for-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Image, Sheet } from "lucide-react";
import React, { useState } from "react";

const LanguageMap = new Map<string, string>([
  ["python", "py"],
  ["javascript", "js"],
  ["typescript", "ts"],
]);

const MarkdownCodeBlock = ({ ...props }) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || "");

  if (!match) {
    return;
  }

  if (match[1] === "think") {
    return (
      <MarkdownThinkBlock>
        {String(children).replace(/\n$/, "")}
      </MarkdownThinkBlock>
    );
  }

  if (match[1] === "echart") {
    return (
      <MarkdownChartBlock>
        {String(children).replace(/\n$/, "")}
      </MarkdownChartBlock>
    );
  }

  return (
    <div className="max-w-full">
      <CodeBlock
        language={LanguageMap.get(match[1]) || match[1]}
        filename={`main.${LanguageMap.get(match[1])}`}
        code={children}
      />
    </div>
  );
};

export default React.memo(MarkdownCodeBlock);

type MarkdownChartBlockProps = {
  children: string;
};

export const MarkdownChartBlock = ({ children }: MarkdownChartBlockProps) => {
  let chartOption = null;
  try {
    chartOption = JSON.parse(children);
  } catch {
    return;
  }
  return (
    <div className="max-w-full bg-white rounded-2xl">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Download />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Image />
              Export as png
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Sheet />
              Export as csv
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      <ReactECharts option={chartOption} />
    </div>
  );
};

type MarkdownThinkBlockProps = {
  children: string;
};

export const MarkdownThinkBlock = ({ children }: MarkdownThinkBlockProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2">
      <Button
        className="w-[40%] h-8 bg-green-300 rounded-md justify-center flex items-center text-black hover:text-white"
        onClick={() => setIsCollapse(isCollapse ? false : true)}
      >
        Thinking
      </Button>
      {!isCollapse && children !== "undefined" && (
        <div className="w-full border-l-4 border-l-gray-500">
          <p className="max-w-full pl-3 whitespace-pre-wrap">{children}</p>
        </div>
      )}
    </div>
  );
};
