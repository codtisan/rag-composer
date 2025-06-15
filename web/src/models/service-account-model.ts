export type ServiceAccountModel = {
  id: string;
  active: boolean;
  email: string;
  token: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
