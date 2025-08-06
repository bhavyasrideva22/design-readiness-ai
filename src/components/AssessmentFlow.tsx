import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Brain, Cog, Target, ArrowLeft, ArrowRight } from "lucide-react";
import AssessmentQuestion from './AssessmentQuestion';
import { useAssessment } from '@/hooks/useAssessment';
import { psychometricQuestions, technicalQuestions, wiscarQuestions, Question } from '@/data/assessmentQuestions';

const AssessmentFlow = () => {
  const {
    currentSection,
    currentStep,
    setCurrentStep,
    assessmentData,
    updateAssessmentData,
    calculateScores,
    nextSection,
    previousSection,
    startAssessment,
    completeAssessment,
  } = useAssessment();

  const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: string }>({});

  const getSectionQuestions = (): Question[] => {
    switch (currentSection) {
      case 'psychometric': return psychometricQuestions;
      case 'technical': return technicalQuestions;
      case 'wiscar': return wiscarQuestions;
      default: return [];
    }
  };

  const getSectionInfo = () => {
    switch (currentSection) {
      case 'psychometric':
        return {
          title: 'Psychometric Analysis',
          description: 'Measure Interest, Motivation, Personality & Cognitive Style',
          icon: Brain,
          color: 'text-primary',
          bgColor: 'bg-primary/10'
        };
      case 'technical':
        return {
          title: 'Technical & Aptitude',
          description: 'Evaluate current knowledge, logical fit, and cognitive abilities',
          icon: Cog,
          color: 'text-secondary',
          bgColor: 'bg-secondary/10'
        };
      case 'wiscar':
        return {
          title: 'WISCAR Framework',
          description: 'Holistic readiness and fit assessment using multi-dimensional analysis',
          icon: Target,
          color: 'text-tertiary',
          bgColor: 'bg-tertiary/10'
        };
      default:
        return {
          title: '',
          description: '',
          icon: Brain,
          color: '',
          bgColor: ''
        };
    }
  };

  const questions = getSectionQuestions();
  const sectionInfo = getSectionInfo();
  const totalSections = 3;
  const currentSectionNumber = currentSection === 'psychometric' ? 1 : currentSection === 'technical' ? 2 : 3;

  const handleAnswer = (questionId: string, value: string) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete current section
      const sectionAnswers: { [category: string]: number[] } = {};
      
      questions.forEach(question => {
        const answer = currentAnswers[question.id];
        if (answer) {
          if (!sectionAnswers[question.category]) {
            sectionAnswers[question.category] = [];
          }
          sectionAnswers[question.category].push(parseInt(answer));
        }
      });

      // Update assessment data
      Object.entries(sectionAnswers).forEach(([category, answers]) => {
        updateAssessmentData(currentSection as keyof typeof assessmentData, category, answers);
      });

      if (currentSection === 'wiscar') {
        completeAssessment();
      } else {
        nextSection();
      }
      
      setCurrentAnswers({});
    }
  };

  const handlePreviousQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentSectionNumber > 1) {
      previousSection();
      const prevQuestions = getSectionQuestions();
      setCurrentStep(prevQuestions.length - 1);
    }
  };

  if (currentSection === 'intro') {
    return (
      <section className="py-20 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Ready to Begin?
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Start Your Assessment Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              You're about to begin a comprehensive 20-30 minute assessment that will evaluate your 
              fit for Industrial Design across multiple dimensions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-primary/5">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Psychometric</h3>
                <p className="text-sm text-muted-foreground">10 questions</p>
              </Card>
              <Card className="p-6 bg-secondary/5">
                <Cog className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Technical</h3>
                <p className="text-sm text-muted-foreground">6 questions</p>
              </Card>
              <Card className="p-6 bg-tertiary/5">
                <Target className="w-12 h-12 text-tertiary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WISCAR</h3>
                <p className="text-sm text-muted-foreground">12 questions</p>
              </Card>
            </div>

            <Button size="lg" onClick={startAssessment} className="px-12 py-4 text-lg">
              Begin Assessment
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (currentSection === 'results') {
    const scores = calculateScores();
    return (
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Assessment Complete
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Your Results Are Ready!
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{scores.psychometric}</div>
                <div className="text-sm text-muted-foreground">Psychometric Fit</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">{scores.technical}</div>
                <div className="text-sm text-muted-foreground">Technical Readiness</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-bold text-tertiary mb-2">{scores.wiscar}</div>
                <div className="text-sm text-muted-foreground">WISCAR Score</div>
              </Card>
            </div>
            <Button size="lg" onClick={() => {
              const resultsSection = document.getElementById('results');
              if (resultsSection) {
                resultsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              View Detailed Results
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentAnswer = currentAnswers[currentQuestion?.id] || '';

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className={`inline-flex p-4 rounded-2xl ${sectionInfo.bgColor} mr-4`}>
              <sectionInfo.icon className={`w-8 h-8 ${sectionInfo.color}`} />
            </div>
            <div className="text-left">
              <Badge variant="outline" className="mb-2">
                Section {currentSectionNumber} of {totalSections}
              </Badge>
              <h2 className="text-3xl font-bold">{sectionInfo.title}</h2>
              <p className="text-muted-foreground">{sectionInfo.description}</p>
            </div>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <AssessmentQuestion
            question={currentQuestion}
            questionNumber={currentStep + 1}
            totalQuestions={questions.length}
            value={currentAnswer}
            onAnswer={(value) => handleAnswer(currentQuestion.id, value)}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            canGoNext={true}
            canGoPrevious={currentStep > 0 || currentSectionNumber > 1}
          />
        )}
      </div>
    </section>
  );
};

export default AssessmentFlow;