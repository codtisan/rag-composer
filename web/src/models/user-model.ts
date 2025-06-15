export type UserModel = {
  id: string;
  status: "Active" | "Inactive";
  email: string;
  name: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
