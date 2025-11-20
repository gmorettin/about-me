import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, AlertTriangle, Target, TrendingUp, Home } from "lucide-react";
import { Link } from "wouter";

export default function ExperienceMapping() {
  const strengths = [
    {
      title: "AI/ML Knowledge",
      description: "Oracle Cloud AI Foundations certification, AI-driven integration experience at Boomi",
      relevance: "Directly applicable to Agentic AI and AI assistant scenarios",
      icon: "🤖"
    },
    {
      title: "Integration Expertise",
      description: "API-led integration patterns, event-driven architecture, data mastering",
      relevance: "Highly relevant for AI assistant extensibility scenarios",
      icon: "🔗"
    },
    {
      title: "Multi-Cloud Expertise",
      description: "Azure, AWS, Google Cloud, VMware experience",
      relevance: "Directly applicable to hybrid cloud scenarios",
      icon: "☁️"
    },
    {
      title: "Rapid Learning & Growth Mindset",
      description: "Oracle Cloud AI cert in 1 week, promoted at VMware after 12 months",
      relevance: "Demonstrates ability to quickly become an AI assistant SME",
      icon: "📈"
    },
    {
      title: "Customer Success & Adoption Focus",
      description: "Drove adoption from 20% to 85% at Boomi through change management",
      relevance: "Critical for AI assistant adoption and customer success",
      icon: "🎯"
    }
  ];

  const experienceMappings = [
    {
      requirement: "Customer-Facing & Customer Success Experience",
      yourExperience: [
        "2+ years as Solutions Consultant/Architect at Boomi (direct customer-facing)",
        "1.5+ years as Cloud Architect at VMware (customer-facing technical role)",
        "Managed 20+ customer accounts, conducted 50+ discovery sessions",
        "Achieved 95% customer satisfaction and renewal rate"
      ],
      talkingPoints: [
        "Managed entire customer lifecycle from pre-sale to post-implementation",
        "Conducted needs assessments and delivered 30+ POCs",
        "Built deep relationships with customers ensuring long-term success"
      ]
    },
    {
      requirement: "Systems Development, Network Operations, IT Consulting",
      yourExperience: [
        "Designed and implemented API-led integration architectures at Boomi",
        "Implemented hybrid cloud architectures with network segmentation at VMware",
        "Provided technical support for 100+ customer issues",
        "Experience with API development, event-driven architectures, network operations"
      ],
      talkingPoints: [
        "Designed 50+ integration architectures",
        "Implemented network security for 15+ cloud migrations",
        "Hands-on experience with systems development and network design"
      ]
    },
    {
      requirement: "Solutions Planning, Deployment, Operation, Optimization",
      yourExperience: [
        "Planned and deployed integration solutions for 20+ enterprise customers at Boomi",
        "Executed 10+ cloud migrations at VMware",
        "Optimized integration performance (reduced latency by 70%)",
        "Optimized cloud costs (reduced costs by 30-50%)"
      ],
      talkingPoints: [
        "Proven track record in planning, deploying, and optimizing enterprise solutions",
        "Rapid learning ability (Oracle Cloud AI cert in 1 week)",
        "Ready to obtain relevant certifications and apply transferable skills"
      ],
      gap: true,
      gapNote: "No direct platform experience - emphasize transferable skills and rapid learning"
    },
    {
      requirement: "Analytical Problem Solving",
      yourExperience: [
        "First Class Mathematics degree from Lancaster University",
        "Diagnosed and resolved 100+ complex integration issues at Boomi",
        "Analyzed customer infrastructure and identified optimization opportunities at VMware",
        "Data-driven approach to root cause analysis"
      ],
      talkingPoints: [
        "Strong analytical foundation from Mathematics degree",
        "Systematic problem-solving using data-driven analysis",
        "Root cause analysis expertise across multiple projects"
      ]
    },
    {
      requirement: "Building Relationships with Senior IT and Business Decision Makers",
      yourExperience: [
        "Engaged with 30+ C-level executives (CIOs, CTOs, CFOs) at Boomi",
        "Built deep relationships with senior IT executives at VMware",
        "Conducted 20+ executive-level presentations",
        "Influenced $5M+ in technology investments"
      ],
      talkingPoints: [
        "Built trust through transparent communication and delivering on commitments",
        "Translated technical concepts into business value for executives",
        "Managed complex stakeholder relationships across multiple departments"
      ]
    },
    {
      requirement: "Explaining Complex Topics to Technical and Business Audiences",
      yourExperience: [
        "Explained AI-driven integration to CFOs focusing on business outcomes",
        "Conducted 50+ presentations to mixed technical and business audiences",
        "Spoke at Boomi World 2024 (industry conference)",
        "Wrote technical documentation, business cases, and proposals"
      ],
      talkingPoints: [
        "Translated technical complexity into strategic business value",
        "Training and enablement experience with 100+ users",
        "Public speaking and thought leadership demonstrated at conferences"
      ]
    },
    {
      requirement: "Exceptional Communication Skills & Multilingual",
      yourExperience: [
        "Fluent in 4 languages: Italian (native), Spanish, English, Catalan",
        "Conducted customer presentations, workshops, and training sessions",
        "Spoke at Boomi World 2024",
        "Strong written communication (technical docs, business cases)"
      ],
      talkingPoints: [
        "Multilingual capability demonstrates adaptability",
        "Willing to learn French if required for the role",
        "Exceptional verbal and written communication skills"
      ],
      gap: true,
      gapNote: "French not listed - mention multilingual capability and willingness to learn"
    },
    {
      requirement: "Change Management, Transformation, Trusted Advisory",
      yourExperience: [
        "Drove adoption from 20% to 85% in 5 months at Boomi",
        "Implemented change management strategies (champions, training, gamification)",
        "Led cloud transformation projects at VMware",
        "Acted as trusted advisor on integration and cloud strategy"
      ],
      talkingPoints: [
        "Understand that technology adoption is about people and process",
        "Proven track record in driving adoption through change management",
        "Customer-focused approach to transformation"
      ]
    },
    {
      requirement: "Journey Mapping & AI Assistant Subject Matter Expertise",
      yourExperience: [
        "Designed 30+ customer integration journeys at Boomi",
        "Conducted 20+ design thinking workshops with BDMs and ITDMs",
        "Led 50+ presentations and demonstrations",
        "Mapped cloud transformation journeys at VMware"
      ],
      talkingPoints: [
        "Proven ability to become SME quickly (Oracle Cloud AI cert in 1 week)",
        "Committed to obtaining relevant industry certifications",
        "Deep-diving into assistant technologies through hands-on experience"
      ],
      gap: true,
      gapNote: "Not yet an AI assistant SME - emphasize rapid learning and commitment"
    },
    {
      requirement: "Relationship Building with BDM & Senior IT Executives",
      yourExperience: [
        "Built relationships with 30+ C-level executives",
        "Managed stakeholder relationships across 20+ accounts",
        "Led value proposition conversations for $5M+ in projects",
        "Achieved consensus across diverse stakeholder groups"
      ],
      talkingPoints: [
        "Navigate complex stakeholder relationships effectively",
        "Align diverse interests around common solutions",
        "Build trust through delivery and transparent communication"
      ]
    }
  ];

  const gaps = [
    {
      gap: "No Direct Platform Experience",
      strategy: "Emphasize transferable skills (cloud deployment, optimization, customer success) + rapid learning ability",
      action: "Commit to obtaining relevant certifications and demonstrate understanding through research"
    },
    {
      gap: "French Language Requirement",
      strategy: "Mention multilingual capability (4 languages) + willingness to learn French",
      action: "Express that language learning demonstrates adaptability"
    },
    {
      gap: "AI Assistant Subject Matter Expertise",
      strategy: "Emphasize rapid learning ability + commitment to becoming expert",
      action: "Commit to hands-on experience and relevant certifications"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Experience Mapping</h1>
            <p className="text-lg text-slate-600">
              How your experience aligns with target role requirements
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Key Strengths */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <h2 className="text-3xl font-bold text-slate-900">Your Key Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{strength.icon}</span>
                    <CardTitle className="text-lg">{strength.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-700">
                    {strength.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <p className="text-sm font-semibold text-green-800">Relevance:</p>
                    <p className="text-sm text-slate-700 mt-1">{strength.relevance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Mappings */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Detailed Experience Mapping</h2>
          </div>
          <div className="space-y-6">
            {experienceMappings.map((mapping, index) => (
              <Card key={index} className={mapping.gap ? "border-yellow-200" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{mapping.requirement}</CardTitle>
                      {mapping.gap && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Gap to Address
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Your Experience */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Your Experience:</h4>
                    <ul className="space-y-2">
                      {mapping.yourExperience.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Talking Points */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Talking Points:</h4>
                    <ul className="space-y-1">
                      {mapping.talkingPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-blue-800">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Gap Note */}
                  {mapping.gapNote && (
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <p className="text-sm font-semibold text-yellow-900 mb-1">How to Address:</p>
                      <p className="text-sm text-yellow-800">{mapping.gapNote}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gaps & Strategies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h2 className="text-3xl font-bold text-slate-900">Gaps & How to Address Them</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gaps.map((item, index) => (
              <Card key={index} className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-900">{item.gap}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">Strategy:</p>
                    <p className="text-sm text-slate-700">{item.strategy}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-sm font-semibold text-yellow-900 mb-1">Action:</p>
                    <p className="text-sm text-yellow-800">{item.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final Positioning Statement */}
        <section>
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Your Positioning Statement</CardTitle>
              <CardDescription className="text-slate-700">
                Use this to introduce yourself and summarize your value proposition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 text-slate-800 leading-relaxed">
                <p className="mb-4">
                  "I bring a unique combination of <strong>AI/ML knowledge</strong>, <strong>integration expertise</strong>, 
                  and <strong>customer success focus</strong> to the target role."
                </p>
                <p className="mb-4">
                  "At Boomi, I drove adoption of AI-driven integration from 20% to 85% through change management strategies, 
                  and at VMware, I built deep relationships with senior IT executives on cloud transformation."
                </p>
                <p className="mb-4">
                  "My Oracle Cloud AI certification and integration expertise position me well for AI assistant extensibility scenarios. 
                  While I don't have direct experience with every vendor platform, I have a proven track record of rapid learning—I obtained my Oracle Cloud 
                  AI certification in 1 week and was promoted at VMware after 12 months."
                </p>
                <p>
                  "I'm committed to becoming an M365 Copilot subject matter expert and driving customer success through adoption, 
                  business value realization, and trusted advisory."
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <Link href="/">
            <Button size="lg" variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <Link href="/quiz">
            <Button size="lg">
              Practice with Quiz
              <Target className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
