"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";
import { useState } from "react";

export type ChatroomInputProps = {
  sendMessage: (input: string, setInput: (value: string) => void) => void;
};

export default function ChatroomInput({ sendMessage }: ChatroomInputProps) {
  const [input, setInput] = useState("");

  return (
    <div className="size-full flex flex-row items-center gap-5">
      <div className="relative h-full w-[94%]">
        <Textarea
          className="size-full"
          placeholder="Type your message here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute left-3 bottom-1">
          <Button variant="ghost">
            <Paperclip />
          </Button>
          <Button variant="ghost" className="rounded-3xl">
            <Mic />
          </Button>
        </div>
      </div>
      <Button
        className="h-[70%] w-[6%] rounded-4xl"
        onClick={() => sendMessage(input, setInput)}
      >
        <Send />
      </Button>
    </div>
  );
}
