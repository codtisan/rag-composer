"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";

export default function ChatroomInput() {
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    console.log(mediaRecorder);
    const audioChunks = [];
    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
      console.log(event.data);
    });
  };
  return (
    <div className="size-full flex flex-row items-center gap-5">
      <div className="relative h-full w-[94%]">
        <Textarea className="size-full" placeholder="Type your message here" />
        <div className="absolute left-3 bottom-1">
          <Button variant="ghost">
            <Paperclip />
          </Button>
          <Button
            variant="ghost"
            className="rounded-3xl"
            onClick={startRecording}
          >
            <Mic />
          </Button>
        </div>
      </div>
      <Button className="h-[70%] w-[6%] rounded-4xl">
        <Send />
      </Button>
    </div>
  );
}
