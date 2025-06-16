import { ChatBubbleAction } from "@/components/ui/chat/chat-bubble";
import { Copy, Download, RefreshCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const actionIcons = [
  { icon: Copy, type: "Copy" },
  { icon: RefreshCcw, type: "Regenerate" },
  { icon: ThumbsUp, type: "Like" },
  { icon: ThumbsDown, type: "Dislike" },
  { icon: Download, type: "Download" },
];

export default function UserFeedbackList() {
  return (
    <div>
      {actionIcons.map(({ icon: Icon, type }) => (
        <Tooltip key={type}>
          <TooltipTrigger asChild>
            <ChatBubbleAction
              className="size-6"
              icon={<Icon className="size-3" />}
            />
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{type}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
