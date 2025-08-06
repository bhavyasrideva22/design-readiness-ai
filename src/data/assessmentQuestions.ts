export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'binary';
  category: string;
  options?: string[];
}

export const psychometricQuestions: Question[] = [
  // Interest Scale
  {
    id: 'interest_1',
    text: 'I enjoy creating and designing new products or improving existing ones.',
    type: 'likert',
    category: 'interest'
  },
  {
    id: 'interest_2', 
    text: 'I find myself drawn to hands-on creative activities and making things.',
    type: 'likert',
    category: 'interest'
  },
  {
    id: 'interest_3',
    text: 'I often think about how everyday objects could be designed better.',
    type: 'likert',
    category: 'interest'
  },
  
  // Personality Compatibility
  {
    id: 'personality_1',
    text: 'I am open to new experiences and enjoy exploring creative possibilities.',
    type: 'likert',
    category: 'personality'
  },
  {
    id: 'personality_2',
    text: 'I pay close attention to details and strive for high-quality work.',
    type: 'likert',
    category: 'personality'
  },
  {
    id: 'personality_3',
    text: 'I work well in collaborative environments and value team input.',
    type: 'likert',
    category: 'personality'
  },

  // Cognitive Style
  {
    id: 'cognitive_1',
    text: 'I prefer to think through problems systematically and analytically.',
    type: 'likert',
    category: 'cognitiveStyle'
  },
  {
    id: 'cognitive_2',
    text: 'I am comfortable working with ambiguous or incomplete information.',
    type: 'likert',
    category: 'cognitiveStyle'
  },

  // Motivation
  {
    id: 'motivation_1',
    text: 'I persist through challenges even when progress is slow.',
    type: 'likert',
    category: 'motivation'
  },
  {
    id: 'motivation_2',
    text: 'I am motivated more by personal satisfaction than external rewards.',
    type: 'likert',
    category: 'motivation'
  }
];

export const technicalQuestions: Question[] = [
  // General Aptitude
  {
    id: 'aptitude_1',
    text: 'Which shape would complete this pattern? [Spatial reasoning test]',
    type: 'multiple-choice',
    category: 'aptitude',
    options: ['Triangle', 'Square', 'Circle', 'Pentagon']
  },
  {
    id: 'aptitude_2',
    text: 'If you rotate a cube 90 degrees clockwise, which face would be on top?',
    type: 'multiple-choice',
    category: 'aptitude',
    options: ['Front face', 'Right face', 'Back face', 'Left face']
  },

  // Prerequisites Knowledge
  {
    id: 'prerequisites_1',
    text: 'What is the primary purpose of Computer-Aided Design (CAD) software?',
    type: 'multiple-choice',
    category: 'prerequisites',
    options: [
      'Creating 2D drawings only',
      'Creating 3D models and technical drawings',
      'Web design and graphics',
      'Spreadsheet calculations'
    ]
  },
  {
    id: 'prerequisites_2',
    text: 'Which material property is most important when designing a smartphone case?',
    type: 'multiple-choice',
    category: 'prerequisites',
    options: ['Color', 'Impact resistance', 'Transparency', 'Weight only']
  },

  // Domain Knowledge
  {
    id: 'domain_1',
    text: 'What does "ergonomics" primarily concern in industrial design?',
    type: 'multiple-choice',
    category: 'domain',
    options: [
      'Cost reduction',
      'Human comfort and efficiency in product use',
      'Manufacturing speed',
      'Marketing appeal'
    ]
  },
  {
    id: 'domain_2',
    text: 'What is the purpose of creating prototypes in the design process?',
    type: 'multiple-choice',
    category: 'domain',
    options: [
      'Final production',
      'Testing and refining design concepts',
      'Cost calculation only',
      'Marketing materials'
    ]
  }
];

export const wiscarQuestions: Question[] = [
  // Will
  {
    id: 'will_1',
    text: 'I have maintained interest in creative projects for extended periods.',
    type: 'likert',
    category: 'will'
  },
  {
    id: 'will_2',
    text: 'I continue working on challenging tasks even when facing setbacks.',
    type: 'likert',
    category: 'will'
  },

  // Interest
  {
    id: 'wiscar_interest_1',
    text: 'I actively seek out information about design trends and innovations.',
    type: 'likert',
    category: 'interest'
  },
  {
    id: 'wiscar_interest_2',
    text: 'I find design-related topics genuinely exciting and engaging.',
    type: 'likert',
    category: 'interest'
  },

  // Skill
  {
    id: 'skill_1',
    text: 'I have experience with design software or creative tools.',
    type: 'likert',
    category: 'skill'
  },
  {
    id: 'skill_2',
    text: 'I can effectively communicate my ideas through sketches or visual means.',
    type: 'likert',
    category: 'skill'
  },

  // Cognitive Readiness
  {
    id: 'cognitive_readiness_1',
    text: 'I can quickly understand and apply new technical concepts.',
    type: 'likert',
    category: 'cognitive'
  },
  {
    id: 'cognitive_readiness_2',
    text: 'I enjoy solving complex, multi-step problems.',
    type: 'likert',
    category: 'cognitive'
  },

  // Ability to Learn
  {
    id: 'ability_1',
    text: 'I actively seek feedback and use it to improve my work.',
    type: 'likert',
    category: 'ability'
  },
  {
    id: 'ability_2',
    text: 'I adapt my learning strategies based on what works best for each topic.',
    type: 'likert',
    category: 'ability'
  },

  // Real-World Alignment
  {
    id: 'realworld_1',
    text: 'I understand the day-to-day responsibilities of an industrial designer.',
    type: 'likert',
    category: 'realWorld'
  },
  {
    id: 'realworld_2',
    text: 'I have realistic expectations about the challenges in design careers.',
    type: 'likert',
    category: 'realWorld'
  }
];