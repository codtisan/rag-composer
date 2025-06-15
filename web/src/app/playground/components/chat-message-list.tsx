"use client";
import {
  ChatBubble,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";

export default function ChatroomMessageList() {
  return (
    <ChatMessageList>
      <ChatBubble variant="sent">
        <ChatBubbleMessage variant="sent">
          Hello, how has your day been? I hope you are doing well.
        </ChatBubbleMessage>
      </ChatBubble>
      <ChatBubble variant="received">
        <ChatBubbleMessage variant="received">
          Hi, I am doing well, thank you for asking. How can I help you today?
        </ChatBubbleMessage>
      </ChatBubble>
      <ChatBubble variant="sent">
        <ChatBubbleMessage variant="sent">
          Hello, how has your day been? I hope you are doing well.
        </ChatBubbleMessage>
      </ChatBubble>
      <ChatBubble variant="received">
        <ChatBubbleMessage isLoading />
      </ChatBubble>
    </ChatMessageList>
  );
}
