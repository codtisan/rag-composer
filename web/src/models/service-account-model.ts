export type ServiceAccountModel = {
  id: string;
  status: "Active" | "Inactive";
  email: string;
  token: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
