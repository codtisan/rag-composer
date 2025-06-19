export type ChatMessageModel = {
  id: string;
  role: "user" | "assistant" | "system";
  content?: string;
  media?: {
    name: string;
    file: File;
  };
  createdAt: Date;
};
