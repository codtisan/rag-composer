"use client";
import {
  ArrowBigLeft,
  ArrowBigRight,
  BookOpenText,
  Bot,
  ChartLine,
  DatabaseBackup,
  File,
  Joystick,
  LayoutDashboard,
  MessageCircle,
  Network,
  Package,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { ReactNode, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useSelectedMenuItemStore from "@/store/use-select-menu-item-store";

type MenuItem = {
  title: string;
  icon: ReactNode;
  link: string;
};

const FirstPageMenuItemList: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    link: "/dashboard",
  },
  {
    title: "Analytics",
    icon: <ChartLine />,
    link: "/analytics",
  },
  {
    title: "Agent",
    icon: <Bot />,
    link: "/agent",
  },
  {
    title: "Knowledge Base",
    icon: <BookOpenText />,
    link: "/knowledge-base",
  },
  {
    title: "Document Manager",
    icon: <File />,
    link: "/document",
  },
  {
    title: "LLM Models",
    icon: <Package />,
    link: "/llm-models",
  },
  {
    title: "Knowledge Graph",
    icon: <Network />,
    link: "/knowledge-graph",
  },
  {
    title: "Conversation history",
    icon: <MessageCircle />,
    link: "/conversation-history",
  },
  {
    title: "Playground",
    icon: <Joystick />,
    link: "/playground",
  },
  {
    title: "Identity and Access Management",
    icon: <Users />,
    link: "/iam",
  },
  {
    title: "Logs",
    icon: <Search />,
    link: "/logs",
  },
  {
    title: "Backup and restore",
    icon: <DatabaseBackup />,
    link: "/backup",
  },
];

const SecondPageMenuItemList: MenuItem[] = [
  {
    title: "Setting",
    icon: <Settings />,
    link: "/setting",
  },
];

const AppSideBar = () => {
  const [isNext, setIsNext] = useState<boolean>(false);
  const { selectedMenuItem, setSelectedMenuItem } = useSelectedMenuItemStore();
  return (
    <div className="h-full w-[3.5%] shadow-sm border-r-1 flex flex-col items-center justify-between">
      <div className="mt-4 flex flex-col gap-2 items-center">
        {!isNext
          ? FirstPageMenuItemList.map((item: MenuItem) => {
              return (
                <div key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.link}>
                        <Button
                          variant="ghost"
                          className={
                            selectedMenuItem === item.title
                              ? "bg-sky-200"
                              : "hover:bg-sky-200"
                          }
                          onClick={() => setSelectedMenuItem(item.title)}
                        >
                          {item.icon}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })
          : SecondPageMenuItemList.map((item: MenuItem) => {
              return (
                <div key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.link}>
                        <Button
                          variant="ghost"
                          className={
                            selectedMenuItem === item.title
                              ? "bg-sky-200"
                              : "hover:bg-sky-200"
                          }
                          onClick={() => setSelectedMenuItem(item.title)}
                        >
                          {item.icon}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="mb-2"
            variant="ghost"
            onClick={() => setIsNext(isNext ? false : true)}
          >
            {!isNext ? <ArrowBigRight /> : <ArrowBigLeft />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {!isNext ? <p>Next</p> : <p>Back</p>}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default AppSideBar;
