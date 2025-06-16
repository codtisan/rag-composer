export type ChatMessageModel = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: Date;
};
