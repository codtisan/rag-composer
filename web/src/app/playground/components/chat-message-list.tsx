"use client";
import {
  ChatBubble,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageModel } from "@/models/chat-message-model";
import UserFeedbackList from "./user-feedback-list";
import SuggestedQuestionList from "./suggested-questions";
import UploadedFileMessage from "./uploaded-files";
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
import useFileStore from "@/store/use-file-upload-store";

export type ChatroomMessageListProps = {
  messages: ChatMessageModel[] | [];
  llmStatus: "loading" | "streaming" | "finished";
  sendMessage: (input: string, setInput: (value: string) => void) => void;
};

export default function ChatroomMessageList({
  llmStatus,
  messages,
  sendMessage,
}: ChatroomMessageListProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { files } = useFileStore();

  return (
    <ChatMessageList>
      {files.length > 0 && <UploadedFileMessage files={files} />}
      {messages.map((message: ChatMessageModel, index: number) => {
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
      })}
      {llmStatus === "loading" && (
        <ChatBubble variant="received">
          <ChatBubbleMessage isLoading />
        </ChatBubble>
      )}
    </ChatMessageList>
  );
}
