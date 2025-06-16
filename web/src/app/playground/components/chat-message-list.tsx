"use client";
import {
  ChatBubble,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatMessageModel } from "@/models/chat-message-model";
import UserFeedbackList from "./user-feedback-list";
import SuggestedQuestionList from "./suggested-questions";

export type ChatroomMessageListProps = {
  messages: ChatMessageModel[] | [];
  llmStatus: "loading" | "streaming" | "finished";
};

export default function ChatroomMessageList({
  llmStatus,
  messages,
}: ChatroomMessageListProps) {
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
                variant={message.role === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
              {message.role === "assistant" && llmStatus === "finished" && (
                <UserFeedbackList />
              )}
              {message.role === "assistant" && llmStatus === "finished" && (
                <SuggestedQuestionList />
              )}
            </ChatBubble>
          </div>
        );
      })}
    </ChatMessageList>
  );
}
