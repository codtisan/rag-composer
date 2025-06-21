export type RequestLogModel = {
  id: string;
  userId: string;
  userAgent: string;
  ip: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  api: string;
  createdAt: Date;
};

export type ResponseLogModel = {
  id: string;
  requestId: string;
  payload: object;
  status: number;
  latency: number;
  createdAt: Date;
};

export type SecurityLogModel = {
  id: string;
  userAgent: string;
  ip: string;
  action: "Login" | "Logout";
  createdAt: Date;
};

export type TransactionLogModel = {
  id: string;
  db: string;
  collection: string;
  action: "FindOne" | "FindMany" | "InsertOne";
  status: number;
  latency: number;
  createdAt: Date;
};
