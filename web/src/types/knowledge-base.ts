export type KnowledgeBaseData = {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
