"use client";
import {
  ChatBubble,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageModel } from "@/models/chat-message-model";
import UserFeedbackList from "./user-feedback-list";
import SuggestedQuestionList from "./suggested-questions";
import Markdown from "react-markdown";
import { MarkdownCodeBlock } from "./markdown-blocks/markdown-code-block";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRef } from "react";

export type ChatroomMessageListProps = {
  messages: ChatMessageModel[] | [];
  llmStatus: "loading" | "streaming" | "finished";
};

export default function ChatroomMessageList({
  llmStatus,
  messages,
}: ChatroomMessageListProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  // messages = MarkdownSample;
  return (
    <ChatMessageList>
      {messages.map((message: ChatMessageModel) => {
        return (
          <div className="flex flex-col" key={message.id}>
            <ChatBubble
              className="flex flex-col items-center"
              variant={message.role === "user" ? "sent" : "received"}
            >
              <ChatBubbleMessage
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
                    code: MarkdownCodeBlock,
                  }}
                >
                  {message.content}
                </Markdown>
              </ChatBubbleMessage>
              {message.role === "assistant" && llmStatus === "finished" && (
                <UserFeedbackList
                  message={message.content}
                  contentRef={contentRef}
                />
              )}
              {message.role === "assistant" && llmStatus === "finished" && (
                <SuggestedQuestionList />
              )}
            </ChatBubble>
          </div>
        );
      })}
      {llmStatus === "loading" && (
        <ChatBubble variant="received">
          <ChatBubbleMessage isLoading />
        </ChatBubble>
      )}
    </ChatMessageList>
  );
}
