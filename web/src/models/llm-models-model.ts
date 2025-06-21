export type LLMModelsModel = {
  id: string;
  modelName: string;
  size: number;
  provider: string;
  tokenUsage: number;
  totalCost: number;
  context: number;
  input: ("text" | "image")[];
  createdAt: Date;
  updatedAt: Date;
};
