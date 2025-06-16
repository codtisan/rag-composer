import { Button } from "@/components/ui/button";

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

export default function SuggestedQuestionList() {
  return (
    <div className="min-w-[80%] flex flex-col gap-2">
      {suggestedQuestions.map((question: SuggestedQuestion) => {
        return <Button key={question.title}>{question.title}</Button>;
      })}
    </div>
  );
}
