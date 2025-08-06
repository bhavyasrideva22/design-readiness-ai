import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'binary';
  options?: string[];
}

interface AssessmentQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  value: string;
  onAnswer: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  value,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}) => {
  const progress = (questionNumber / totalQuestions) * 100;

  const getLikertOptions = () => [
    { value: "1", label: "Strongly Disagree" },
    { value: "2", label: "Disagree" },
    { value: "3", label: "Neutral" },
    { value: "4", label: "Agree" },
    { value: "5", label: "Strongly Agree" }
  ];

  const getBinaryOptions = () => [
    { value: "1", label: "No" },
    { value: "2", label: "Yes" }
  ];

  const getOptions = () => {
    if (question.type === 'likert') return getLikertOptions();
    if (question.type === 'binary') return getBinaryOptions();
    return question.options?.map((option, index) => ({ value: (index + 1).toString(), label: option })) || [];
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="p-8 shadow-card">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 leading-relaxed">
            {question.text}
          </h3>
        </div>

        {/* Answer Options */}
        <RadioGroup value={value} onValueChange={onAnswer} className="space-y-4">
          {getOptions().map((option) => (
            <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent transition-colors">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label 
                htmlFor={option.value} 
                className="flex-1 cursor-pointer text-base leading-relaxed"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            disabled={!canGoPrevious}
          >
            Previous
          </Button>
          <Button 
            onClick={onNext}
            disabled={!canGoNext || !value}
            className="px-8"
          >
            {questionNumber === totalQuestions ? 'Complete Section' : 'Next'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AssessmentQuestion;