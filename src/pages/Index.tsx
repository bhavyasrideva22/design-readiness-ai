import Navigation from "@/components/Navigation";
import AssessmentHero from "@/components/AssessmentHero";
import AssessmentOverview from "@/components/AssessmentOverview";
import AssessmentSections from "@/components/AssessmentSections";
import WISCARFramework from "@/components/WISCARFramework";
import RecommendationEngine from "@/components/RecommendationEngine";
import AssessmentFlow from "@/components/AssessmentFlow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AssessmentHero />
        <section id="overview">
          <AssessmentOverview />
        </section>
        <section id="assessment">
          <AssessmentFlow />
        </section>
        <section id="sections">
          <AssessmentSections />
        </section>
        <section id="wiscar">
          <WISCARFramework />
        </section>
        <section id="results">
          <RecommendationEngine />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
