import { BackupAndRestoreTable } from "./components/backup-restore-table";

export default function BackupAndRestore() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[97%] h-[98%]">
        <BackupAndRestoreTable />
      </div>
    </div>
  );
}
