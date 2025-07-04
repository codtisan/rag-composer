"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChatMessageModel } from "@/models/chat-message-model";
import { Mic, Paperclip, Send } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UploadedFileMessage from "./uploaded-files";
import { cn } from "@/lib/utils";

export type ChatroomInputProps = {
  sendMessage: (
    input: string,
    setInput: (value: string) => void,
    files: File[] | [],
    setFiles?: (value: File[] | []) => void,
  ) => void;
  setMessages: (value: ChatMessageModel[]) => void;
};

const ChatroomInput = ({ sendMessage }: ChatroomInputProps) => {
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<File[] | []>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(uploadedFiles)]);
      e.target.value = "";
    }
  };

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
              sendMessage(input, setInput, files, setFiles);
            }
          }}
        />
        <div className="absolute left-3 bottom-1 flex flex-row items-center gap-3 ml-2">
          <Tooltip key="file">
            <TooltipTrigger asChild>
              <Label className="flex justify-center items-center rounded-4xl w-[2.5rem] h-[2.5rem] hover:bg-gray-100">
                <Paperclip className="w-[1rem] h-[1rem]" />
                <Input type="file" hidden onChange={handleFileUpload} />
              </Label>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Upload File</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip key="mic">
            <TooltipTrigger asChild>
              <Button variant="ghost" className="rounded-3xl">
                <Mic />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Microphone</p>
            </TooltipContent>
          </Tooltip>
          <div className="flex flex-row gap-5 items-center">
            {files.length > 0 &&
              files.map((file: File) => {
                const isDocument = !file.type.startsWith("image/");
                return (
                  <div key={file.name}>
                    <div>
                      <UploadedFileMessage size={60} file={file} />
                    </div>
                    <button
                      className={cn(
                        `absolute ml-${isDocument ? "58" : "12"} top-[-0.5rem] size-[1.5rem] text-white bg-gray-800 rounded-full`,
                      )}
                      onClick={() => {
                        const newFiles = files.filter(
                          (f: File) => f.name !== file.name,
                        );
                        setFiles(newFiles);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Button
        className="h-[70%] w-[6%] rounded-4xl"
        onClick={() => sendMessage(input, setInput, files, setFiles)}
      >
        <Send />
      </Button>
    </div>
  );
};

export default React.memo(ChatroomInput);
