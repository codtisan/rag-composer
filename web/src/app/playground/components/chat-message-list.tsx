"use client";
import {
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageModel } from "@/models/chat-message-model";
import UserFeedbackList from "./user-feedback-list";
import SuggestedQuestionList from "./suggested-questions";
import UploadedFileMessage from "./uploaded-files";
import Markdown from "react-markdown";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRef, useState } from "react";
import markdownCodeBlock from "./markdown-blocks/markdown-code-block";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

export type ChatroomMessageListProps = {
  messages: ChatMessageModel[] | [];
  llmStatus: "loading" | "streaming" | "finished";
  sendMessage: (
    input: string,
    setInput: (value: string) => void,
    files: File[] | [],
  ) => void;
};

export default function ChatroomMessageList({
  llmStatus,
  messages,
  sendMessage,
}: ChatroomMessageListProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  return (
    <ChatMessageList>
      {messages.map((message: ChatMessageModel, index: number) => {
        if (message.media) {
          return <UploadedFileMessage key={index} file={message.media.file} />;
        }

        if (message.content) {
          if (message.role === "assistant") {
            message.content = message.content.replace("<think>", "\`\`\`think");
            message.content = message.content.replace("</think>", "\`\`\`");
          }

          const copyToClipboard = async () => {
            const textToCopy = message.content;
            if (textToCopy) {
              await navigator.clipboard.writeText(textToCopy);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          };

          return (
            <div className="flex flex-col" key={message.id}>
              <ChatBubble
                className={cn(
                  "flex flex-col items-center",
                  message.role === "assistant" ? "w-[60%]" : "",
                )}
                variant={message.role === "user" ? "sent" : "received"}
              >
                <ChatBubbleMessage
                  className={cn(
                    "",
                    message.role === "assistant" ? "w-full" : "",
                  )}
                  ref={contentRef}
                  variant={message.role === "user" ? "sent" : "received"}
                >
                  <Markdown
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    remarkRehypeOptions={{ passThrough: ["link"] }}
                    components={{
                      table: ({ children, ...props }) => {
                        return (
                          <Table {...props}>
                            {children}
                            <TableCaption>
                              A Table Showing Information
                            </TableCaption>
                          </Table>
                        );
                      },
                      thead: ({ children, ...props }) => {
                        return <TableHeader {...props}>{children}</TableHeader>;
                      },
                      th: ({ children, ...props }) => {
                        return <TableHead {...props}>{children}</TableHead>;
                      },
                      tbody: ({ children, ...props }) => {
                        return <TableBody {...props}>{children}</TableBody>;
                      },
                      tr: ({ children, ...props }) => {
                        return <TableRow {...props}>{children}</TableRow>;
                      },
                      td: ({ children, ...props }) => {
                        return <TableCell {...props}>{children}</TableCell>;
                      },
                      code: markdownCodeBlock,
                    }}
                  >
                    {message.content}
                  </Markdown>
                </ChatBubbleMessage>
                {message.role === "user" && (
                  <Tooltip key="copy">
                    <TooltipTrigger asChild>
                      <ChatBubbleAction
                        className="size-6 self-end"
                        icon={copied ? <Check /> : <Copy />}
                        onClick={copyToClipboard}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Copy</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {message.role === "assistant" &&
                  llmStatus === "finished" &&
                  index === messages.length - 1 && (
                    <UserFeedbackList
                      message={message.content}
                      contentRef={contentRef}
                    />
                  )}
                {message.role === "assistant" &&
                  llmStatus === "finished" &&
                  index === messages.length - 1 && (
                    <SuggestedQuestionList sendMessage={sendMessage} />
                  )}
              </ChatBubble>
            </div>
          );
        }
      })}
      {llmStatus === "loading" && (
        <ChatBubble variant="received">
          <ChatBubbleMessage isLoading />
        </ChatBubble>
      )}
    </ChatMessageList>
  );
}
