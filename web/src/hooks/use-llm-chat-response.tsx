import { ChatMessageModel } from "@/models/chat-message-model";
import { fileToBase64 } from "@/utils/file";
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

  const sendMessage = async (
    input: string,
    setInput: (value: string) => void,
    files: File[] | [],
    setFiles?: (value: File[] | []) => void,
  ) => {
    if (input.trim()) {
      const userMessage: ChatMessageModel = {
        id: uuidv4(),
        content: input,
        createdAt: new Date(),
        role: "user",
      };

      if (files.length !== 0) {
        const newMediaMessages: ChatMessageModel[] = files.map((file) => ({
          id: uuidv4(),
          role: "user",
          content: "",
          createdAt: new Date(),
          media: {
            name: file.name,
            file: file,
          },
        }));
        setMessages([...messages, ...newMediaMessages, userMessage]);
        const fileBase64 = await fileToBase64(files[0]);
        const payload = {
          input: input,
          file: fileBase64,
        };
        ws.current.send(JSON.stringify(payload));
        if (setFiles) {
          setFiles([]);
        }
      } else {
        const payload = {
          input: input,
        };
        setMessages([...messages, userMessage]);
        ws.current.send(JSON.stringify(payload));
      }
      setLLMStatus("loading");
      setInput("");
    }
  };

  return {
    sendMessage,
  };
};

export default UseLLMChatResponse;
