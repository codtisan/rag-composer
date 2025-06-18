"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
          onKeyDown={(e) => {
            if (e.key === "Enter" && input !== "") {
              sendMessage(input, setInput);
            }
          }}
        />
        <div className="absolute left-3 bottom-1 flex flex-row items-center gap-3 ml-2">
          <Label className="flex justify-center items-center rounded-4xl w-[1rem] h-[1rem] hover:bg-gray-50">
            <Paperclip />
            <Input type="file" hidden />
          </Label>
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
