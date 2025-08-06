import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Cog, Target, TrendingUp, Lightbulb, Users } from "lucide-react";

const AssessmentSections = () => {
  const sections = [
    {
      icon: Brain,
      title: "Psychometric Analysis",
      description: "Measure Interest, Motivation, Personality & Cognitive Style",
      components: [
        { name: "Interest Scale", description: "Desire to explore design and creative tasks" },
        { name: "Personality Compatibility", description: "Big Five and Holland Codes assessment" },
        { name: "Cognitive Style", description: "Analytical vs creative tendencies" },
        { name: "Motivation Assessment", description: "Grit scale and growth mindset evaluation" }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Cog,
      title: "Technical & Aptitude",
      description: "Evaluate current knowledge, logical fit, and cognitive abilities",
      components: [
        { name: "General Aptitude", description: "Logical reasoning and spatial tests" },
        { name: "Prerequisite Knowledge", description: "Geometry, physics, and CAD basics" },
        { name: "Domain Quiz", description: "Design principles and industry tools" },
        { name: "Problem Solving", description: "Applied technical challenges" }
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Target,
      title: "WISCAR Framework",
      description: "Holistic readiness and fit assessment using multi-dimensional analysis",
      components: [
        { name: "Will (W)", description: "Inner drive and persistence measurement" },
        { name: "Interest (I)", description: "Genuine curiosity and engagement" },
        { name: "Skill (S)", description: "Current capability assessment" },
        { name: "Cognitive Readiness (C)", description: "Knowledge processing ability" },
        { name: "Ability to Learn (A)", description: "Adaptability and learning persistence" },
        { name: "Real-World Alignment (R)", description: "Role expectations matching" }
      ],
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Assessment Framework
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Evaluation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our assessment combines proven psychological instruments with technical evaluation 
              and innovative frameworks to provide accurate career guidance.
            </p>
          </div>

          {/* Assessment Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Section Header */}
                  <div className="lg:w-1/3">
                    <div className={`inline-flex p-4 rounded-2xl ${section.bgColor} mb-4`}>
                      <section.icon className={`w-8 h-8 ${section.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Completion Rate</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>

                  {/* Components Grid */}
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.components.map((component, compIndex) => (
                        <div key={compIndex} className="p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                          <h4 className="font-semibold mb-2 text-foreground">{component.name}</h4>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Output Preview */}
          <Card className="mt-16 p-8 bg-gradient-secondary text-white shadow-glow">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Comprehensive Results</h3>
              <p className="text-xl mb-8 opacity-90">
                Receive detailed scores, personalized insights, and actionable career guidance
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">0-100</div>
                  <div className="opacity-90">Readiness Scores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="opacity-90">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="opacity-90">Career Recommendations</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSections;