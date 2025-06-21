import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserX } from "lucide-react";
import { RequestLogTable } from "./components/request-log-table";
import { ResponseLogTable } from "./components/response-log-table";
import { SecurityLogTable } from "./components/security-log-table";
import { TransactionLogTable } from "./components/transaction-log-table";

export default function Logs() {
  return (
    <div className="h-full w-[96%] flex items-center justify-center">
      <div className="w-[97%] h-[95%] flex flex-col gap-5">
        <Tabs defaultValue="request-log">
          <TabsList className="w-full">
            <TabsTrigger value="request-log">
              <Users />
              Request Log
            </TabsTrigger>
            <TabsTrigger value="response-log">
              <UserX />
              Response Log
            </TabsTrigger>
            <TabsTrigger value="security-log">
              <UserX />
              Security Log
            </TabsTrigger>
            <TabsTrigger value="transaction-log">
              <UserX />
              Transaction Log
            </TabsTrigger>
          </TabsList>
          <TabsContent value="request-log">
            <RequestLogTable />
          </TabsContent>
          <TabsContent value="response-log">
            <ResponseLogTable />
          </TabsContent>
          <TabsContent value="security-log">
            <SecurityLogTable />
          </TabsContent>
          <TabsContent value="transaction-log">
            <TransactionLogTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
