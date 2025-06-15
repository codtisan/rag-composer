export type DocumentModel = {
  id: string;
  name: string;
  status: "Uploading" | "Uploaded" | "Processing" | "Processed" | "Ready";
  type: "pdf" | "txt" | "docx";
  size: number;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};
