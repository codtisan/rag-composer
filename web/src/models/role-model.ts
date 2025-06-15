export enum IAMPermission {
  View = "view",
  Create = "create",
  Delete = "delete",
  Edit = "edit",
  Download = "download",
}

export enum DashboardPermission {
  View = "view",
  Download = "download",
}

export const IAMPolicies = {
  dashboard: {
    title: "Dashboard",
    policies: Object.values(DashboardPermission),
  },
  knowledgeBase: {
    title: "Knowledge base",
    policies: Object.values(IAMPermission),
  },
  documentManager: {
    title: "Document Manager",
    policies: Object.values(IAMPermission),
  },
};

export type RoleModel = {
  id: string;
  status: "Active" | "Inactive";
  name: string;
  dashboard: DashboardPermission[] | [];
  analytics: DashboardPermission[] | [];
  knowledgeBase: IAMPermission[] | [];
  createdAt: Date;
  updatedAt: Date;
};
