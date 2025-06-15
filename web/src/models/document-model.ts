export type DocumentModel = {
  id: string;
  name: string;
  active: boolean;
  status: "Uploading" | "Uploaded" | "Processing" | "Processed" | "Ready";
  type: "pdf" | "txt" | "docx" | "md" | "pptx";
  size: number;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};
