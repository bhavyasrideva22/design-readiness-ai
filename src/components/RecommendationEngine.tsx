import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  TrendingUp, 
  BookOpen,
  Users,
  ExternalLink,
  Target,
  Lightbulb
} from "lucide-react";

const RecommendationEngine = () => {
  // Mock assessment results
  const psychometricScore = 88;
  const technicalScore = 72;
  const wiscarScore = 83;
  const overallScore = Math.round((psychometricScore + technicalScore + wiscarScore) / 3);
  const confidenceScore = 94;

  const getRecommendation = () => {
    if (overallScore >= 75) return "yes";
    if (overallScore >= 50) return "maybe";
    return "no";
  };

  const recommendation = getRecommendation();

  const recommendationContent = {
    yes: {
      icon: CheckCircle,
      title: "Excellent Fit for Industrial Design",
      color: "text-success",
      bgColor: "bg-success/10",
      description: "Your assessment results indicate strong potential for success in Industrial Design. You demonstrate the right combination of creativity, technical aptitude, and motivation.",
      reasons: [
        "High psychometric compatibility with design thinking",
        "Strong spatial reasoning and problem-solving abilities", 
        "Excellent motivation and growth mindset",
        "Good foundation in technical prerequisites"
      ],
      nextSteps: [
        "Begin with foundational CAD software training",
        "Explore design thinking methodology courses",
        "Start building a portfolio of design projects",
        "Consider internships or mentorship opportunities"
      ]
    },
    maybe: {
      icon: AlertCircle,
      title: "Potential with Development Needed",
      color: "text-warning",
      bgColor: "bg-warning/10", 
      description: "You show promise for Industrial Design but would benefit from targeted skill development in specific areas before fully committing to this career path.",
      reasons: [
        "Good creative potential and interest",
        "Some technical knowledge gaps to address",
        "Strong learning motivation present",
        "Need to strengthen specific skill areas"
      ],
      nextSteps: [
        "Focus on improving technical skills first",
        "Take introductory design courses",
        "Practice spatial reasoning exercises",
        "Reassess after 6 months of focused learning"
      ]
    },
    no: {
      icon: XCircle,
      title: "Consider Alternative Paths",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      description: "Based on your assessment, other career paths might be a better fit for your current profile and interests. However, this doesn't preclude future development.",
      reasons: [
        "Limited alignment with design thinking patterns",
        "Technical prerequisites need significant development",
        "Other career paths may be more suitable",
        "Different creative outlets might be better fits"
      ],
      nextSteps: [
        "Explore related creative fields",
        "Consider graphic design or UX research",
        "Look into engineering or technical roles",
        "Reassess interests and strengths"
      ]
    }
  };

  const current = recommendationContent[recommendation];

  const careerAlternatives = [
    { title: "Graphic Design", match: "85%", description: "Visual communication and branding" },
    { title: "UX/UI Design", match: "78%", description: "Digital product design and user experience" },
    { title: "Architecture", match: "72%", description: "Spatial design and construction planning" },
    { title: "Engineering Technology", match: "68%", description: "Technical implementation and problem-solving" }
  ];

  const learningResources = [
    { title: "Introduction to CAD Design", provider: "Coursera", type: "Online Course", duration: "4 weeks" },
    { title: "Design Thinking Bootcamp", provider: "IDEO U", type: "Workshop", duration: "2 weeks" },
    { title: "Industrial Design Fundamentals", provider: "Skillshare", type: "Video Series", duration: "6 weeks" },
    { title: "3D Modeling Masterclass", provider: "Udemy", type: "Comprehensive", duration: "8 weeks" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Assessment Results
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Your Personalized Recommendations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on your comprehensive assessment, here are your personalized career guidance 
              and development recommendations.
            </p>
          </div>

          {/* Score Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">{psychometricScore}</div>
              <div className="text-sm text-muted-foreground">Psychometric Fit</div>
              <Progress value={psychometricScore} className="mt-3 h-2" />
            </Card>
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">{technicalScore}</div>
              <div className="text-sm text-muted-foreground">Technical Readiness</div>
              <Progress value={technicalScore} className="mt-3 h-2" />
            </Card>
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-tertiary mb-2">{wiscarScore}</div>
              <div className="text-sm text-muted-foreground">WISCAR Score</div>
              <Progress value={wiscarScore} className="mt-3 h-2" />
            </Card>
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-success mb-2">{confidenceScore}%</div>
              <div className="text-sm text-muted-foreground">Confidence Level</div>
              <Progress value={confidenceScore} className="mt-3 h-2" />
            </Card>
          </div>

          {/* Main Recommendation */}
          <Card className={`p-8 mb-12 border-2 ${current.bgColor} shadow-elegant`}>
            <div className="flex items-start gap-6">
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-white flex items-center justify-center`}>
                <current.icon className={`w-8 h-8 ${current.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {current.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Key Insights
                    </h4>
                    <ul className="space-y-3">
                      {current.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Recommended Next Steps
                    </h4>
                    <ul className="space-y-3">
                      {current.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Career Alternatives & Learning Resources */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Career Alternatives */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-semibold">Alternative Career Paths</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Based on your profile, these related careers might also be excellent fits:
              </p>
              <div className="space-y-4">
                {careerAlternatives.map((career, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold">{career.title}</h4>
                      <p className="text-sm text-muted-foreground">{career.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{career.match}</div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Learning Resources */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-tertiary mr-3" />
                <h3 className="text-2xl font-semibold">Recommended Learning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Start your Industrial Design journey with these curated learning resources:
              </p>
              <div className="space-y-4">
                {learningResources.map((resource, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-card transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{resource.provider}</p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                          <Badge variant="outline" className="text-xs">{resource.duration}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6" variant="secondary">
                View All Resources
              </Button>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 p-8 bg-gradient-primary text-white text-center shadow-glow">
            <TrendingUp className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get your complete detailed report and personalized learning roadmap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8">
                Download Full Report
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white/30 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecommendationEngine;