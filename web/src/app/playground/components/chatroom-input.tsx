import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";

export default function ChatroomInput() {
  return (
    <div className="size-full flex flex-row items-center gap-5">
      <div className="relative h-full w-[94%]">
        <Textarea className="size-full" placeholder="Type your message here" />
        <div className="absolute left-3 bottom-1">
          <Button variant="ghost" className="rounded-3xl">
            <Paperclip />
          </Button>
          <Button variant="ghost" className="rounded-3xl">
            <Mic />
          </Button>
        </div>
      </div>
      <Button className="h-[80%] w-[6%] rounded-4xl">
        <Send />
      </Button>
    </div>
  );
}
