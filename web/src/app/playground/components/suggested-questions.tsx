import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export type SuggestedQuestion = {
  title: string;
};

const suggestedQuestions = [
  {
    title: "What is computer science?",
  },
  {
    title: "What is AI?",
  },
];

export type SuggestedQuestionListProps = {
  sendMessage: (
    input: string,
    setInput: (value: string) => void,
    files: File[] | [],
  ) => void;
};

const SuggestedQuestionList = ({ sendMessage }: SuggestedQuestionListProps) => {
  const [, setInput] = useState("");

  return (
    <div className="w-full flex flex-col gap-2">
      {suggestedQuestions.map((question: SuggestedQuestion) => {
        return (
          <Button
            key={question.title}
            onClick={() => {
              sendMessage(question.title, setInput, []);
            }}
          >
            {question.title}
          </Button>
        );
      })}
    </div>
  );
};

export default React.memo(SuggestedQuestionList);
