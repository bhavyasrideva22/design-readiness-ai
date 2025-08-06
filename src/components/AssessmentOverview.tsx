import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react";

const AssessmentOverview = () => {
  const careers = [
    "Product Designer",
    "UX/UI Designer", 
    "CAD Engineer",
    "Prototype Specialist",
    "Design Researcher"
  ];

  const keyTraits = [
    "Creativity",
    "Spatial Reasoning", 
    "Problem-Solving",
    "Perseverance",
    "Collaboration",
    "Attention to Detail"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Assessment Overview
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Industrial Design Career Assessment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Evaluate your psychological fit, technical aptitude, motivation, and career alignment 
              for Industrial Design through our comprehensive assessment framework.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What is Industrial Design */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">What is Industrial Design?</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Industrial Design is the creative and technical process of developing products that 
                optimize aesthetics, usability, and manufacturability. It combines artistic vision 
                with engineering principles to create products that are both beautiful and functional.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span>CAD software and 3D modeling tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span>Concept sketching and visualization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span>User research and testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-3" />
                  <span>Prototyping and iteration</span>
                </div>
              </div>
            </Card>

            {/* Assessment Details */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-semibold">Assessment Details</h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                  <span className="font-medium">Duration</span>
                  <Badge variant="secondary">20-30 minutes</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                  <span className="font-medium">Question Types</span>
                  <Badge variant="secondary">Mixed Format</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                  <span className="font-medium">Sections</span>
                  <Badge variant="secondary">4 Main Areas</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                  <span className="font-medium">Result Type</span>
                  <Badge variant="secondary">Comprehensive Report</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Career Pathways & Key Traits */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Career Pathways */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-tertiary mr-3" />
                <h3 className="text-2xl font-semibold">Career Pathways</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Industrial Design opens doors to diverse career opportunities across industries:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {careers.map((career, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-primary text-white rounded-lg">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span className="font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Key Traits */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Key Traits for Success</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Successful industrial designers typically demonstrate these core competencies:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {keyTraits.map((trait, index) => (
                  <div key={index} className="flex items-center p-3 bg-accent rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium">{trait}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentOverview;