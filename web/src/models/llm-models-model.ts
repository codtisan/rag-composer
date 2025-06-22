export type LLMModelsModel = {
  id: string;
  modelName: string;
  size: number;
  provider: string;
  tokenUsage: number;
  totalCost: number;
  context: number;
  input: ("text" | "image")[];
  apiKey: string;
  createdAt: Date;
  updatedAt: Date;
};
