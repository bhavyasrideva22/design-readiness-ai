import { useState, useCallback } from 'react';

export interface AssessmentData {
  psychometric: {
    interest: number[];
    personality: number[];
    cognitiveStyle: number[];
    motivation: number[];
  };
  technical: {
    aptitude: number[];
    prerequisites: number[];
    domain: number[];
  };
  wiscar: {
    will: number[];
    interest: number[];
    skill: number[];
    cognitive: number[];
    ability: number[];
    realWorld: number[];
  };
}

export interface AssessmentScores {
  psychometric: number;
  technical: number;
  wiscar: number;
  overall: number;
  confidence: number;
}

const initialData: AssessmentData = {
  psychometric: {
    interest: [],
    personality: [],
    cognitiveStyle: [],
    motivation: [],
  },
  technical: {
    aptitude: [],
    prerequisites: [],
    domain: [],
  },
  wiscar: {
    will: [],
    interest: [],
    skill: [],
    cognitive: [],
    ability: [],
    realWorld: [],
  },
};

export const useAssessment = () => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'psychometric' | 'technical' | 'wiscar' | 'results'>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(initialData);
  const [isCompleted, setIsCompleted] = useState(false);

  const updateAssessmentData = useCallback((section: keyof AssessmentData, subsection: string, answers: number[]) => {
    setAssessmentData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: answers
      }
    }));
  }, []);

  const calculateScores = useCallback((): AssessmentScores => {
    const calculateSectionScore = (sectionData: any) => {
      const allAnswers = Object.values(sectionData).flat() as number[];
      return allAnswers.length > 0 ? Math.round(allAnswers.reduce((sum, val) => sum + val, 0) / allAnswers.length * 20) : 0;
    };

    const psychometric = calculateSectionScore(assessmentData.psychometric);
    const technical = calculateSectionScore(assessmentData.technical);
    const wiscar = calculateSectionScore(assessmentData.wiscar);
    const overall = Math.round((psychometric + technical + wiscar) / 3);
    const confidence = Math.min(95, Math.max(75, overall + Math.random() * 10));

    return { psychometric, technical, wiscar, overall, confidence };
  }, [assessmentData]);

  const nextSection = useCallback(() => {
    const sections = ['intro', 'psychometric', 'technical', 'wiscar', 'results'] as const;
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
      setCurrentStep(0);
    }
  }, [currentSection]);

  const previousSection = useCallback(() => {
    const sections = ['intro', 'psychometric', 'technical', 'wiscar', 'results'] as const;
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
      setCurrentStep(0);
    }
  }, [currentSection]);

  const startAssessment = useCallback(() => {
    setCurrentSection('psychometric');
    setCurrentStep(0);
  }, []);

  const completeAssessment = useCallback(() => {
    setCurrentSection('results');
    setIsCompleted(true);
  }, []);

  const resetAssessment = useCallback(() => {
    setCurrentSection('intro');
    setCurrentStep(0);
    setAssessmentData(initialData);
    setIsCompleted(false);
  }, []);

  return {
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
    resetAssessment,
    isCompleted,
  };
};