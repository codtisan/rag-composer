import { CodeBlock } from "@/components/ui/code-block";
import ReactECharts from "echarts-for-react";

const LanguageMap = new Map<string, string>([
  ["python", "py"],
  ["javascript", "js"],
  ["typescript", "ts"],
]);

export const MarkdownCodeBlock = ({ ...props }) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || "");

  if (!match) {
    return;
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
    <div className="max-w-full">
      <ReactECharts option={chartOption} />
    </div>
  );
};
