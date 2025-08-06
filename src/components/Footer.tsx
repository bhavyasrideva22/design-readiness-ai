import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Assessment",
      links: [
        { name: "How It Works", href: "#" },
        { name: "WISCAR Framework", href: "#" },
        { name: "Sample Results", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    },
    {
      title: "Careers",
      links: [
        { name: "Industrial Design", href: "#" },
        { name: "Product Design", href: "#" },
        { name: "UX/UI Design", href: "#" },
        { name: "CAD Engineering", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Learning Paths", href: "#" },
        { name: "Course Catalog", href: "#" },
        { name: "Mentorship", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-3">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DesignFit</h3>
                <Badge variant="secondary" className="mt-1 bg-white/20 text-white border-white/30">
                  Assessment Platform
                </Badge>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover your potential in Industrial Design through comprehensive AI-powered assessment 
              and personalized career guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">contact@designfit.ai</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Discover Your Design Potential?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of aspiring designers who have discovered their career path through our comprehensive assessment.
            </p>
            <Button variant="hero" size="lg" className="px-8">
              Start Your Assessment Today
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 DesignFit Assessment Platform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;