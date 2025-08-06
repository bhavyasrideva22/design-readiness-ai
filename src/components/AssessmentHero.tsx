import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, TrendingUp, Users, Lightbulb, Cog } from "lucide-react";

const AssessmentHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header Badge */}
          <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg font-medium bg-white/20 text-white border-white/30">
            AI-Powered Career Assessment
          </Badge>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Fit for
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Industrial Design
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Career and Learning Readiness Assessment using advanced psychometric analysis, 
            technical evaluation, and the proven WISCAR framework.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="hero" className="px-8 py-4 text-lg">
              Start Assessment
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <Target className="w-12 h-12 mb-4 mx-auto text-primary-glow" />
              <h3 className="text-xl font-semibold mb-3">Psychometric Analysis</h3>
              <p className="text-white/80">Evaluate personality, motivation, and cognitive style alignment with design careers</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <Cog className="w-12 h-12 mb-4 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold mb-3">Technical Aptitude</h3>
              <p className="text-white/80">Assess spatial reasoning, CAD knowledge, and design fundamentals</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <TrendingUp className="w-12 h-12 mb-4 mx-auto text-tertiary" />
              <h3 className="text-xl font-semibold mb-3">WISCAR Framework</h3>
              <p className="text-white/80">Multi-dimensional readiness analysis for comprehensive career guidance</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AssessmentHero;