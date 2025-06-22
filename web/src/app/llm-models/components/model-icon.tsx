import {
  Gemini,
  OpenAI,
  DeepSeek,
  Meta,
  Qwen,
  Anthropic,
  Grok,
} from "@lobehub/icons";

type ModelIconProps = {
  modelName: string;
};

const ModelIcon = ({ modelName }: ModelIconProps) => {
  switch (modelName) {
    case "Gemini-1":
      return <Gemini.Color className="size-[50%]" />;
    case "DeepSeek-R-2":
      return <OpenAI className="size-[50%]" />;
    case "Qwen-1.5":
      return <Qwen.Color size={64} className="size-[50%]" />;
    case "Llama-3":
      return <Meta.Color size={64} className="size-[50%]" />;
    case "GPT-4":
      return <OpenAI size={64} className="size-[50%]" />;
    case "Gemini-1.5":
      return <Gemini.Color size={64} className="size-[50%]" />;
    case "DeepSeek-R-3":
      return <DeepSeek.Color size={64} className="size-[50%]" />;
    case "Qwen-2":
      return <Qwen.Color size={64} className="size-[50%]" />;
    case "Llama-3.1":
      return <Meta.Color size={64} className="size-[50%]" />;
    case "Claude":
      return <Anthropic size={64} className="size-[50%]" />;
    case "Grok":
      return <Grok size={64} className="size-[50%]" />;
    case "GPT-4o":
      return <OpenAI size={64} className="size-[50%]" />;
    default:
      return null;
  }
};

export default ModelIcon;
