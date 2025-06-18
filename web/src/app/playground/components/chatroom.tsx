"use client";
import { useState } from "react";
import ChatroomMessageList from "./chat-message-list";
import { ChatMessageModel } from "@/models/chat-message-model";
import UseLLMChatResponse from "@/hooks/use-llm-chat-response";
import ChatroomInput from "./chatroom-input";

export default function Chatroom() {
  const [messages, setMessages] = useState<ChatMessageModel[] | []>([]);
  const [llmStatus, setLLMStatus] = useState<
    "loading" | "streaming" | "finished"
  >("finished");

  const { sendMessage } = UseLLMChatResponse({
    messages: messages,
    setMessages: setMessages,
    setLLMStatus: setLLMStatus,
    socketUrl: "ws://127.0.0.1:8000/ws",
  });

  return (
    <div className="size-full">
      <div className="h-[85%]">
        <ChatroomMessageList
          messages={messages}
          llmStatus={llmStatus}
          sendMessage={sendMessage}
        />
      </div>
      <div className="h-[15%]">
        <ChatroomInput sendMessage={sendMessage} setMessages={setMessages} />
      </div>
    </div>
  );
}
