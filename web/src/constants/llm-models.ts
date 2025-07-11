import { LLMModelsModel } from "@/models/llm-models-model";

export const llmModelSamples: LLMModelsModel[] = [
  {
    id: "model_001",
    modelName: "GPT-4o",
    size: 80,
    provider: "OpenAI",
    tokenUsage: 1600,
    totalCost: 0.8,
    context: 128000,
    input: ["text", "image"],
    apiKey: "sk-123e4567-e89b-12d3-a456-426614174001",
    createdAt: new Date("2025-01-05T09:00:00Z"),
    updatedAt: new Date("2025-01-06T14:20:00Z"),
  },
  {
    id: "model_002",
    modelName: "Llama-3.1",
    size: 70,
    provider: "Meta AI",
    tokenUsage: 2500,
    totalCost: 1.25,
    context: 8000,
    input: ["text"],
    apiKey: "sk-987f6543-a21b-98c7-d890-123456789002",
    createdAt: new Date("2025-02-10T11:30:00Z"),
    updatedAt: new Date("2025-02-12T08:45:00Z"),
  },
  {
    id: "model_003",
    modelName: "Qwen-2",
    size: 72,
    provider: "Alibaba",
    tokenUsage: 900,
    totalCost: 0.45,
    context: 32000,
    input: ["text", "image"],
    apiKey: "sk-456c7890-d12e-34f5-b678-987654321003",
    createdAt: new Date("2025-03-15T13:15:00Z"),
    updatedAt: new Date("2025-03-15T13:15:00Z"),
  },
  {
    id: "model_004",
    modelName: "DeepSeek-R-3",
    size: 66,
    provider: "DeepSeek",
    tokenUsage: 4800,
    totalCost: 2.4,
    context: 64000,
    input: ["text"],
    apiKey: "sk-321g0987-h65i-43j2-k901-234567890004",
    createdAt: new Date("2025-04-01T10:50:00Z"),
    updatedAt: new Date("2025-04-03T12:00:00Z"),
  },
  {
    id: "model_005",
    modelName: "Gemini-1.5",
    size: 90,
    provider: "Google",
    tokenUsage: 1300,
    totalCost: 0.65,
    context: 1000000,
    input: ["text", "image"],
    apiKey: "sk-789k1234-l56m-78n9-o012-345678901005",
    createdAt: new Date("2025-05-08T15:25:00Z"),
    updatedAt: new Date("2025-05-09T09:10:00Z"),
  },
  {
    id: "model_006",
    modelName: "GPT-4",
    size: 175,
    provider: "OpenAI",
    tokenUsage: 3200,
    totalCost: 1.6,
    context: 32000,
    input: ["text"],
    apiKey: "sk-234p5678-q90r-12s3-t456-789012345006",
    createdAt: new Date("2025-06-03T07:40:00Z"),
    updatedAt: new Date("2025-06-04T11:30:00Z"),
  },
  {
    id: "model_007",
    modelName: "Llama-3",
    size: 13,
    provider: "Meta AI",
    tokenUsage: 2000,
    totalCost: 1.0,
    context: 8000,
    input: ["text"],
    apiKey: "sk-890u1234-v56w-78x9-y012-345678901007",
    createdAt: new Date("2025-06-10T12:05:00Z"),
    updatedAt: new Date("2025-06-11T16:15:00Z"),
  },
  {
    id: "model_008",
    modelName: "Qwen-1.5",
    size: 14,
    provider: "Alibaba",
    tokenUsage: 4200,
    totalCost: 2.1,
    context: 16000,
    input: ["text", "image"],
    apiKey: "sk-456z7890-a12b-34c5-d678-901234567008",
    createdAt: new Date("2025-06-15T08:20:00Z"),
    updatedAt: new Date("2025-06-16T10:00:00Z"),
  },
  {
    id: "model_009",
    modelName: "DeepSeek-R-2",
    size: 33,
    provider: "DeepSeek",
    tokenUsage: 1800,
    totalCost: 0.9,
    context: 128000,
    input: ["text"],
    apiKey: "sk-123e4567-f89g-12h3-i456-789012345009",
    createdAt: new Date("2025-06-20T14:30:00Z"),
    updatedAt: new Date("2025-06-21T07:50:00Z"),
  },
  {
    id: "model_010",
    modelName: "Gemini-1",
    size: 60,
    provider: "Google",
    tokenUsage: 1100,
    totalCost: 0.55,
    context: 32000,
    input: ["text", "image"],
    apiKey: "sk-789j0123-k45l-67m8-n901-234567890010",
    createdAt: new Date("2025-06-22T00:10:00Z"),
    updatedAt: new Date("2025-06-22T00:10:00Z"),
  },
  {
    id: "model_011",
    modelName: "Gemini-1",
    size: 60,
    provider: "Google",
    tokenUsage: 1100,
    totalCost: 0.55,
    context: 32000,
    input: ["text", "image"],
    apiKey: "sk-234m5678-p90q-12r3-s456-789012345011",
    createdAt: new Date("2025-06-22T00:10:00Z"),
    updatedAt: new Date("2025-06-22T00:10:00Z"),
  },
  {
    id: "model_012",
    modelName: "Claude",
    size: 60,
    provider: "Google",
    tokenUsage: 1100,
    totalCost: 0.55,
    context: 32000,
    input: ["text", "image"],
    apiKey: "sk-890t1234-u56v-78w9-x012-345678901012",
    createdAt: new Date("2025-06-22T00:10:00Z"),
    updatedAt: new Date("2025-06-22T00:10:00Z"),
  },
  {
    id: "model_013",
    modelName: "Grok",
    size: 60,
    provider: "Google",
    tokenUsage: 1100,
    totalCost: 0.55,
    context: 32000,
    input: ["text", "image"],
    apiKey: "sk-456y7890-z12a-34b5-c678-901234567013",
    createdAt: new Date("2025-06-22T00:10:00Z"),
    updatedAt: new Date("2025-06-22T00:10:00Z"),
  },
];
