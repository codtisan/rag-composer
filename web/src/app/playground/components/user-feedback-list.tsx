import { ChatBubbleAction } from "@/components/ui/chat/chat-bubble";
import {
  Check,
  Copy,
  Download,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RefObject, useState } from "react";
import { cn } from "@/lib/utils";

type UserFeedbackListProps = {
  message: string;
  contentRef: RefObject<HTMLDivElement | null>;
};

export default function UserFeedbackList({
  message,
  contentRef,
}: UserFeedbackListProps) {
  const [copied, setCopied] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const generatePDF = async () => {
    if (!contentRef.current) {
      console.error("Content reference is null");
      return;
    }

    console.log(contentRef);
  };

  const copyToClipboard = async () => {
    const textToCopy = message;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const likeMessage = async () => {
    setIsLike(true);
    setTimeout(() => setIsLike(false), 2000);
  };

  const dislikeMessage = async () => {
    setIsDislike(true);
    setTimeout(() => setIsDislike(false), 2000);
  };

  const actionIcons = [
    {
      icon: copied ? <Check /> : <Copy />,
      type: "Copy",
      action: copyToClipboard,
    },
    { icon: <RefreshCcw />, type: "Regenerate" },
    {
      icon: (
        <ThumbsUp className={cn(isLike ? "fill-black dark:fill-white" : "")} />
      ),
      type: "Like",
      action: likeMessage,
    },
    {
      icon: (
        <ThumbsDown
          className={cn(isDislike ? "fill-black dark:fill-white" : "")}
        />
      ),
      type: "Dislike",
      action: dislikeMessage,
    },
    { icon: <Download />, type: "Download", action: generatePDF },
  ];

  return (
    <div>
      {actionIcons.map(({ icon: Icon, type, action }) => (
        <Tooltip key={type}>
          <TooltipTrigger asChild>
            <ChatBubbleAction className="size-6" icon={Icon} onClick={action} />
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{type}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
