import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Heart, 
  Wrench, 
  Brain, 
  GraduationCap, 
  Target,
  TrendingUp,
  BarChart3
} from "lucide-react";

const WISCARFramework = () => {
  const wiscarDimensions = [
    {
      letter: "W",
      title: "Will",
      subtitle: "Inner Drive & Persistence",
      description: "Consistency of interest over time, perseverance through challenges, and determination to succeed in design.",
      icon: Zap,
      score: 85,
      color: "text-primary",
      bgColor: "bg-primary/10",
      indicators: ["Consistency of interest", "Perseverance tasks", "Long-term commitment"]
    },
    {
      letter: "I", 
      title: "Interest",
      subtitle: "Engagement & Enthusiasm",
      description: "Genuine curiosity about design, passion for creative problem-solving, and intrinsic motivation.",
      icon: Heart,
      score: 92,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      indicators: ["Curiosity questions", "Career relevance", "Passion assessment"]
    },
    {
      letter: "S",
      title: "Skill",
      subtitle: "Current Capability Level", 
      description: "Existing technical abilities, software proficiency, and design fundamentals knowledge.",
      icon: Wrench,
      score: 68,
      color: "text-tertiary",
      bgColor: "bg-tertiary/10",
      indicators: ["Technical skills", "Software knowledge", "Design principles"]
    },
    {
      letter: "C",
      title: "Cognitive Readiness",
      subtitle: "Knowledge Processing Ability",
      description: "Analytical thinking, spatial reasoning, and ability to understand complex design concepts.",
      icon: Brain,
      score: 88,
      color: "text-warning",
      bgColor: "bg-warning/10",
      indicators: ["Analytical tasks", "Learning agility", "Spatial reasoning"]
    },
    {
      letter: "A",
      title: "Ability to Learn",
      subtitle: "Adaptability & Growth",
      description: "Openness to feedback, metacognitive strategies, and persistence in acquiring new skills.",
      icon: GraduationCap,
      score: 91,
      color: "text-success",
      bgColor: "bg-success/10",
      indicators: ["Feedback openness", "Learning strategies", "Adaptation skills"]
    },
    {
      letter: "R",
      title: "Real-World Alignment",
      subtitle: "Industry Role Matching",
      description: "Understanding of actual job requirements, realistic expectations, and role compatibility.",
      icon: Target,
      score: 79,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      indicators: ["Job task matching", "Role expectations", "Industry knowledge"]
    }
  ];

  const overallScore = Math.round(wiscarDimensions.reduce((sum, dim) => sum + dim.score, 0) / wiscarDimensions.length);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              WISCAR Framework
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Multi-Dimensional Readiness Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The WISCAR framework provides a comprehensive evaluation across six critical dimensions 
              to determine your readiness for a career in Industrial Design.
            </p>
          </div>

          {/* Overall Score Card */}
          <Card className="mb-12 p-8 bg-gradient-secondary text-white shadow-glow">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Overall WISCAR Score</h3>
              <div className="text-6xl font-bold mb-4">{overallScore}</div>
              <p className="text-xl opacity-90 mb-6">
                {overallScore >= 85 ? "Excellent readiness for Industrial Design career" :
                 overallScore >= 75 ? "Strong potential with focused development" :
                 overallScore >= 65 ? "Moderate fit with significant learning needed" :
                 "Consider alternative paths or extensive preparation"}
              </p>
              <div className="max-w-md mx-auto">
                <Progress value={overallScore} className="h-3 bg-white/20" />
              </div>
            </div>
          </Card>

          {/* WISCAR Dimensions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {wiscarDimensions.map((dimension, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${dimension.bgColor} flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${dimension.color}`}>
                      {dimension.letter}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{dimension.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{dimension.subtitle}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Progress value={dimension.score} className="flex-1 h-2" />
                      <span className="text-2xl font-bold min-w-[3rem] text-right">{dimension.score}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {dimension.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Indicators:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dimension.indicators.map((indicator, indIndex) => (
                      <Badge key={indIndex} variant="outline" className="text-xs">
                        {indicator}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Radar Chart Visualization */}
          <Card className="p-8 shadow-card">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">WISCAR Profile Visualization</h3>
              <p className="text-muted-foreground">
                Your strengths and development areas across all dimensions
              </p>
            </div>
            
            {/* Simplified radar chart representation */}
            <div className="relative w-80 h-80 mx-auto">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Grid circles */}
                {[60, 90, 120, 150].map((radius, i) => (
                  <circle
                    key={i}
                    cx="150"
                    cy="150"
                    r={radius}
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Grid lines */}
                {wiscarDimensions.map((_, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const x2 = 150 + 150 * Math.cos(angle);
                  const y2 = 150 + 150 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1="150"
                      x2={x2}
                      y2={y2}
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                  );
                })}
                
                {/* Data polygon */}
                <polygon
                  points={wiscarDimensions.map((dim, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const radius = (dim.score / 100) * 150;
                    const x = 150 + radius * Math.cos(angle);
                    const y = 150 + radius * Math.sin(angle);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="hsl(var(--primary) / 0.2)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                
                {/* Data points */}
                {wiscarDimensions.map((dim, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const radius = (dim.score / 100) * 150;
                  const x = 150 + radius * Math.cos(angle);
                  const y = 150 + radius * Math.sin(angle);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="hsl(var(--primary))"
                    />
                  );
                })}
                
                {/* Labels */}
                {wiscarDimensions.map((dim, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const x = 150 + 170 * Math.cos(angle);
                  const y = 150 + 170 * Math.sin(angle);
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm font-semibold fill-foreground"
                    >
                      {dim.letter}
                    </text>
                  );
                })}
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WISCARFramework;