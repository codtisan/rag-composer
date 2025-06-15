import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserX } from "lucide-react";
import { UserTable } from "./components/user-table";
import { RoleTable } from "./components/role-table";
import { ServiceAccountTable } from "./components/service-account-table";

export default function IAM() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[97%] h-[95%] flex flex-col gap-5">
        <Tabs defaultValue="user">
          <TabsList className="w-full">
            <TabsTrigger value="user">
              <Users />
              User
            </TabsTrigger>
            <TabsTrigger value="role">
              <UserX />
              Role
            </TabsTrigger>
            <TabsTrigger value="service-account">
              <UserX />
              Service Account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user">
            <UserTable />
          </TabsContent>
          <TabsContent value="role">
            <RoleTable />
          </TabsContent>
          <TabsContent value="service-account">
            <ServiceAccountTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
