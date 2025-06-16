import { ChatMessageModel } from "@/models/chat-message-model";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export type UseLLMChatProps = {
  socketUrl: string;
  messages: ChatMessageModel[] | [];
  setMessages: (value: ChatMessageModel[]) => void;
  setLLMStatus: (value: "loading" | "streaming" | "finished") => void;
};

const UseLLMChatResponse = ({
  socketUrl,
  messages,
  setMessages,
  setLLMStatus,
}: UseLLMChatProps) => {
  const ws = useRef<WebSocket>(new WebSocket(socketUrl));
  console.log(messages);

  useEffect(() => {
    ws.current = new WebSocket(socketUrl);

    ws.current.onopen = () => {
      console.log("Connected");
    };

    ws.current.onmessage = (event) => {
      const data = event.data;
      if (data !== "end:") {
        setLLMStatus("streaming");
      } else {
        setLLMStatus("finished");
        return;
      }
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.role === "assistant") {
          return [
            ...prevMessages.slice(0, -1),
            {
              ...lastMessage,
              content: lastMessage.content + data,
            },
          ];
        } else {
          const newMessage: ChatMessageModel = {
            id: uuidv4(),
            content: data,
            createdAt: new Date(),
            role: "assistant",
          };
          return [...prevMessages, newMessage];
        }
      });
    };

    ws.current.onclose = () => {
      console.log("Closed");
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = (input: string, setInput: (value: string) => void) => {
    if (input.trim()) {
      const userMessage: ChatMessageModel = {
        id: uuidv4(),
        content: input,
        createdAt: new Date(),
        role: "user",
      };
      setMessages([...messages, userMessage]);
      ws.current.send(input);
      setInput("");
    }
  };

  return {
    sendMessage,
  };
};

export default UseLLMChatResponse;
