export type KnowledgeBaseModel = {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
