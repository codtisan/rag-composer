export type BackupRestoreModel = {
  id: string;
  local_url: string;
  s3_url: string;
  from: Date;
  to: Date;
  createdAt: Date;
};
