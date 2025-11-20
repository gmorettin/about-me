import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, Sparkles, Target, TrendingUp, Users, Zap, 
  ArrowRight, CheckCircle2, Award, Briefcase, GraduationCap,
  Mail, Linkedin, ExternalLink, ChevronDown, Heart, Gamepad2
} from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import ROICalculator from "@/components/ROICalculator";

import KeyAchievements from "@/components/KeyAchievements";
import Languages from "@/components/Languages";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    modern_work: [
      "Automation of Business Processes",
      "Event-driven Architectures",
      "Mergers & Acquisitions Ecosystem Consolidation",
      "Change Management",
      "Adoption Strategies"
    ],
    customer_success: [
      "Executive Engagement",
      "Solution Design",
      "ROI Articulation",
      "Technical Enablement",
      "Customer Advocacy"
    ],
    technical: [
      "Multi-Cloud Architecture",
      "AI & Agent Design",
      "Disaster Recovery",
      "Security & Compliance",
      "Digital Transformation"
    ]
  };

  const experience = [
    {
      company: "Boomi",
      role: "AI-Driven Integration Architect",
      period: "Oct 2024 - Oct 2025",
      location: "South EMEA & Nordics Market",
      icon: <Briefcase className="h-5 w-5" />,
      highlights: [
        "Drove technical strategy and customer adoption across Italy and Iberia, standardizing integration patterns and operating models across South EMEA and Nordics",
        "Developed reference architectures, reusable blueprints, and governance playbooks that enabled consistent delivery of API-led, event-driven, and data mastering integration",
        "🏆 Winner 'Pitch Perfect Demo' - Boomi Global Sales Kickoff 2024",
        "🎤 Presenter 'AgentStudio & AI Roadmap' - Boomi World Forum Milan 2024"
      ],
      skills: ["AI-Driven Integration", "Reference Architecture", "Governance Playbooks", "API-led Integration", "Event-Driven Architecture"]
    },
    {
      company: "Boomi",
      role: "AI-Driven Integration Architect",
      period: "Nov 2023 - Oct 2024",
      location: "UK&I Market",
      icon: <Briefcase className="h-5 w-5" />,
      highlights: [
        "Partnered with UKI mid-market customers to design and implement integration architectures",
        "Led full presales cycle from discovery to target architecture and roadmap delivery, developing PoCs and demos that validated business outcomes",
        "Translated results into executive-level value assessments, reference architectures, operating models, and governance frameworks",
        "Accelerated adoption and ensured consistent delivery across customer base"
      ],
      skills: ["Presales Solution Design", "Value Engineering", "Executive Engagement", "PoC Development", "Operating Models"]
    },
    {
      company: "VMware",
      role: "Cloud Architect - Multi Cloud Solutions Specialist",
      period: "May 2022 - Nov 2023",
      location: "Italian Market",
      icon: <Cloud className="h-5 w-5" />,
      highlights: [
        "Created multi-cloud architectures with VMware Cloud on AWS, AVS, GCVE, and OCVS for enterprise clients",
        "Designed disaster recovery strategies using VMware DRaaS ensuring resilience, regulatory compliance, and rapid recovery from ransomware",
        "Led PoCs, customer workshops, and enablements demonstrating value in reducing downtime and safeguarding critical workloads",
        "🏆 VMware Performance Award - System Engineer Multi-Cloud category 2022"
      ],
      skills: ["Multi-Cloud Architecture", "VMware Cloud", "DRaaS", "Ransomware Recovery", "Customer Workshops"]
    },
    {
      company: "VMware",
      role: "Generalist Solutions Architect",
      period: "Dec 2021 - May 2022",
      location: "South EMEA & UK&I Market",
      icon: <Cloud className="h-5 w-5" />,
      highlights: [
        "Provided technical guidance across VMware's portfolio, advising customers on infrastructure modernization, digital workspace, and security",
        "Delivered end-to-end architecture presentations linking VMware technologies to business outcomes",
        "Supported senior engineers in RFPs, demos, and PoCs, gaining strong customer-facing experience"
      ],
      skills: ["Solution Architecture", "Infrastructure Modernization", "Digital Workspace", "Security", "Technical Pre-Sales"]
    },
    {
      company: "VMware",
      role: "VMware Academy - Graduate Architect Solutions Engineer",
      period: "Jul 2021 - Dec 2021",
      location: "EMEA",
      icon: <Cloud className="h-5 w-5" />,
      highlights: [
        "Completed VMware's graduate program, building foundations across full portfolio: vSphere, vSAN, NSX, vRealize Suite, Workspace ONE, Horizon",
        "Delivered enablement sessions to peers in graduate program",
        "Conducted discovery workshops across EMEA for sales graduates"
      ],
      skills: ["vSphere", "NSX", "vSAN", "vRealize Suite", "Workspace ONE", "Technical Enablement"]
    }
  ];

  const caseStudies = [
    {
      title: "AI-Powered Enterprise Integration",
      company: "Boomi",
      challenge: "Enterprise customers needed to integrate AI capabilities across fragmented systems while maintaining security and compliance.",
      solution: "Designed and implemented AI-driven integration architecture leveraging Boomi's platform, enabling seamless data flow and intelligent automation.",
      impact: [
        "Reduced integration time by 60%",
        "Enabled real-time AI-powered insights",
        "Improved data quality and governance"
      ],
      skills: ["AI Integration", "Enterprise Architecture", "Change Management"]
    },
    {
      title: "Multi-Cloud Migration & Optimization",
      company: "VMware",
      challenge: "Large enterprise needed to migrate legacy workloads to Oracle Cloud while maintaining VMware compatibility and minimizing downtime.",
      solution: "Architected Oracle Cloud VMware Solution deployment with phased migration strategy, ensuring business continuity and performance optimization.",
      impact: [
        "Zero downtime migration",
        "40% infrastructure cost reduction",
        "Improved scalability and disaster recovery"
      ],
      skills: ["Cloud Architecture", "Migration Strategy", "Technical Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.1}px)`, animationDelay: "1s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            {/* Logo/Brand space - can be used later if needed */}
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient tracking-wide">
              Award-winning Solutions Consultant
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/memory-game">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
              >
                <Gamepad2 className="h-4 w-4 mr-1.5" />
                Memory
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-4 px-4 overflow-hidden">
        {/* Decorative Blob Background */}
        <div className="absolute left-0 top-0 w-96 h-96 opacity-30 -z-10 filter blur-3xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
              </filter>
            </defs>
            <path fill="#FDB4A0" fillOpacity="0.6" d="M50,50 Q50,20 80,20 Q110,20 110,50 Q110,80 80,100 Q50,80 50,50" filter="url(#soft-glow)" style={{filter: 'drop-shadow(0 10px 30px rgba(253,180,160,0.4))'}}/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo with Arched Name */}
            <div className="relative flex justify-center">
              <div className="relative w-80">
                {/* Arched Name SVG */}
                <svg 
                  viewBox="0 -50 400 250" 
                  className="absolute w-full h-auto"
                  style={{ zIndex: 20, marginLeft: 'calc(1cm + 0.5cm - 2cm)', top: '0.5cm', left: '50%', transform: 'translateX(-50%)' }}
                >
                  <defs>
                    <path 
                      id="arch" 
                      d="M 30 110 Q 200 -5 380 110" 
                      fill="none"
                    />
                    <style>{`
                      @font-face {
                        font-family: 'Pencil';
                        src: local('Segoe Print'), local('Comic Sans MS');
                      }
                    `}</style>
                  </defs>
                  
                  {/* Handwritten text in capitals with pencil style */}
                  <text 
                    style={{ 
                      fontSize: '20px', 
                      letterSpacing: '2px', 
                      fontFamily: "'Segoe Print', 'Comic Sans MS', 'Marker Felt', cursive",
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fill: '#000000',
                      opacity: '0.7',
                      paintOrder: 'stroke',
                      stroke: '#000000',
                      strokeWidth: '0.3',
                      transform: 'rotate(-45deg)',
                      transformOrigin: '200px 100px'
                    }}
                  >
                    <textPath 
                      href="#arch" 
                      startOffset="50%" 
                      textAnchor="middle"
                    >
                      GIORGIA MORETTIN
                    </textPath>
                  </text>
                </svg>
                
                {/* Photo */}
                <img 
                  src="/giorgia-photo.png" 
                  alt="Giorgia Morettin" 
                  className="w-80 h-auto object-contain drop-shadow-2xl relative z-10 mx-8"
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-2xl text-slate-700 mb-4 font-medium">
                Multi-Cloud & DRaaS | AI-driven Integration
              </p>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Customer-first Solutions Consultant with a Master's in Mathematics First Class Honours and a track record of success in problem solving and solution design. Recognized with global performance awards for delivering high-impact presentations, executive engagements, and architectures that drive measurable adoption across EMEA.
              </p>
              
              <div className="flex flex-col gap-3 mb-8">
                <Badge className="inline-flex items-center justify-center rounded-md text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-3 py-1.5">
                  <Award className="h-4 w-4 mr-1.5" />
                  Great Demo Methodology Global Presales Workshop Winner 2024
                </Badge>
                <Badge className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1.5 rounded-md text-xs font-medium w-fit whitespace-nowrap">
                  <Award className="h-4 w-4 mr-1.5" />
                  VMware EMEA Multi-Cloud Performance Award 2022
                </Badge>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 transition-all shadow-md hover:shadow-lg"
                  title="Work Experience"
                >
                  <Briefcase className="h-12 w-12 text-blue-600" />
                </button>
                <Link href="/education">
                  <button
                    className="flex-shrink-0 p-5 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 hover:from-purple-200 hover:to-purple-100 transition-all shadow-md hover:shadow-lg"
                    title="Education"
                  >
                    <GraduationCap className="h-12 w-12 text-purple-600" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <Card className="backdrop-blur-sm bg-white/60 border-slate-200/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center min-h-32">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+ years</div>
                  <div className="text-xs text-slate-600">Advising customers</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 border-slate-200/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center min-h-32">
                  <div className="text-2xl font-bold text-purple-600 mb-1">EMEA</div>
                  <div className="text-xs text-slate-600">Primary Region</div>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-white/60 border-slate-200/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center flex flex-col items-center justify-center min-h-32">
                  <div className="text-2xl font-bold text-blue-600 mb-1">4+</div>
                  <div className="text-xs text-slate-600">Languages Native Speaker</div>
                </CardContent>
              </Card>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce mt-12">
            <ChevronDown className="h-8 w-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Modern Work & Copilot */}
            <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Integration & AI</h3>
                <div className="space-y-2">
                  {skills.modern_work.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Success */}
            <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Customer Advisor</h3>
                <div className="space-y-2">
                  {skills.customer_success.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Expertise */}
            <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Expertise</h3>
                <div className="space-y-2">
                  {skills.technical.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                        <div className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex items-start gap-3 text-slate-700">
                          <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sidx) => (
                      <Badge key={sidx} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-28 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <KeyAchievements />
        </div>
      </section>

      {/* Languages */}
      <section className="py-4 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <Languages />
        </div>
      </section>

      {/* Contact CTA - simplified: only primary actions */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              onClick={() => window.open('https://www.linkedin.com/in/giorgia-morettin', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2"
              onClick={() => window.location.href = 'mailto:giorgiamorettinsala99@outlook.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Link href="/memory-game">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Memory
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
