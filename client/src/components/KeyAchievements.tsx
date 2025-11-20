import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Mic, Users, TrendingUp, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  impact?: string;
  category: "Award" | "Project" | "Speaking" | "Customer" | "Leadership";
  date: string;
  link?: string;
  icon: typeof Award;
  image?: string;
  quote?: string;
  quoteAuthor?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Winner EMEA Demo Day + 2nd Place Worldwide",
    organization: "Boomi",
    description: "Winner of EMEA-level presales Great Demo Methodology-based demo day, competing against top presales professionals across the region. Achieved 2nd place worldwide in presales organization, demonstrating exceptional demo delivery and storytelling capabilities. Recognized as 'Pitch Perfect Demo' winner at Boomi Global Sales Kickoff 2024 for outstanding presentation skills and customer engagement approach.",
    impact: "Set the standard for presales excellence across EMEA and globally. Methodology and approach adopted by teams across organization for customer demos and presentations.",
    category: "Award",
    date: "2024",
    icon: Award,
    image: import.meta.env.BASE_URL + 'certifications/1742470450342-ach.jpeg',
    quote: "Giorgia's demo was flawless - perfect balance of technical depth and a strong business value focus. She set the bar for what great value selling for presales looks like.",
    quoteAuthor: "Global Presales Panelist - Presales Leadership Team",
  },
  {
    id: 2,
    title: "VMware FY23 Performance Award - System Engineer Multi-Cloud",
    organization: "VMware",
    description: "Received VMware FY23 Performance Award in System Engineer Multi-Cloud category for outstanding technical performance, customer success, and contributions to multi-cloud practice development. Recognized for driving significant revenue growth and customer satisfaction across Italian market through innovative multi-cloud solutions and executive engagement.",
    impact: "Established multi-cloud best practices that became standard across EMEA region, including sizing best practices task force for VMware with AWS. Enabled customers to successfully adopt hybrid cloud strategies.",
    category: "Award",
    date: "2023",
    icon: Award,
    image: import.meta.env.BASE_URL + 'certifications/1742470450433-ach.jpeg',
    quote: "Giorgia, I'm very happy to award you. This is not only for the high number of both customer and internal activities executed, but for showing initiative and leadership in projects like the Core/Cloud SE Days. Your growth in the team and as a SE, over the last months, is noticeable and recognizable! Keep the goo energy!, Congratulations!!!",
    quoteAuthor: "Manager Solution Engineering Multi-Cloud EMEA",
  },
  {
    id: 3,
    title: "Integration & AI Webinar + Boomi Milan Speaker",
    organization: "Boomi",
    description: "Presented Integration & AI webinar series to customers and partners across EMEA. Delivered keynote session on 'AgentStudio & AI Roadmap Vision' at Boomi World Forum Milan 2024, presenting Boomi's AI strategy and AgentStudio capabilities to CXOs of Italian enterprise customers. Session included live demos and customer use case discussions.",
    impact: "Established thought leadership in AI-driven integration space, educating customers and partners on AI roadmap. Generated significant interest in AgentStudio and positioned Boomi as AI integration leader.",
    category: "Speaking",
    date: "2024",
    icon: Mic,
  },
  {
    id: 4,
    title: "Oracle Cloud Services Webinar Collaboration",
    organization: "Oracle",
    description: "Collaborated with Oracle on Cloud Services webinar series, co-presenting with Oracle Cloud Infrastructure team on multi-cloud solutions, VMware Cloud on Oracle Cloud (OCVS) integration strategies, and joint customer success stories. Webinar reached 500+ attendees across EMEA region.",
    impact: "Strengthened VMware-Oracle partnership and demonstrated multi-cloud expertise to joint customer base. Generated qualified leads for both organizations and positioned VMware as strategic Oracle partner.",
    category: "Speaking",
    date: "2023",
    link: "https://go.oracle.com/LP=133016?elqCampaignId=368994&src1=:se:lw:ie:pt:::SEO400269101&evite=WWMK221121P00012:se:lw:ie:pt:::SEO400269101#connect_share",
    icon: Mic,
    quote: "Giorgia's expertise and dedication in preparing and conducting the webinar were exceptional. She demonstrated a deep understanding of the subject matter and engaged the audience effectively throughout the session. Her presentation style was clear, engaging, and insightful, which contributed significantly to the webinar's success, one of the most followed during 2022.\n\nAbout the joint deals, Giorgia is all about the customers. She understands their needs and it's not just about selling: it's about providing real solutions. Her customer-centric approach is the secret sauce that keeps clients coming back for more.\n\nWorking with Giorgia is a true pleasure, and I hope to increase our joint efforts into future collaborations or projects. Her professionalism, expertise, and dedication are unmatched, and I am confident that she will continue to make a significant impact on the VMware's business.",
    quoteAuthor: "Account Cloud Engineer - Oracle",
  },
  {
    id: 5,
    title: "Diversity & Inclusion Speaker at EMEA Cloud BU",
    organization: "VMware",
    description: "Invited speaker at EMEA Cloud Business Unit all hands meeting (300+ attendees), presenting on Diversity & Inclusion initiatives, best practices, and personal experiences. Session focused on local initiatives available for the team to participate in.",
    impact: "Contributed to organizational culture transformation and inclusion awareness across EMEA region. Presentation sparked organization-wide conversation and led to new D&I initiatives within Cloud BU.",
    category: "Speaking",
    date: "2023",
    icon: Users,
  },
  {
    id: 6,
    title: "VMware on AWS Sizing EMEA Best Practices",
    organization: "VMware",
    description: "Created comprehensive best practices guidelines document for VMware on AWS sizing across EMEA region, standardizing sizing methodology, tooling, and customer engagement approach in both VMware and AWS as part of a 6-team task force. Document included detailed sizing calculators, common pitfall avoidance, and reference architectures. Adopted as official EMEA standard for VMware Cloud on AWS engagements.",
    impact: "Enabled consistent and accurate sizing across EMEA, reducing deployment errors and improving customer satisfaction scores. Accelerated sales cycles by providing standardized sizing framework.",
    category: "Project",
    date: "2023",
    icon: Briefcase,
  },
  {
    id: 7,
    title: "VCDR PoC Template for Partners & Teams",
    organization: "VMware",
    description: "Developed a comprehensive VMware Cloud Disaster Recovery (VCDR) PoC template including technical setup guides, stages, pre-built calendar commits for a 3-week POC timeline, and success criteria frameworks. Shared with internal SE teams and partner ecosystem across EMEA. Template became standard for VCDR POCs in customer engagements.",
    category: "Project",
    date: "2023",
    icon: Briefcase,
    quote: "I already told Giorgia: her work on the VCDR POC Miro board is great! It's an awesome doc that can help a lot on formalizing the whole process. Great report Giorgia, thank you very much!",
    quoteAuthor: "Senior VMware Solution Engineer",
  },
  {
    id: 8,
    title: "Cloud Day - Cross-BU Collaboration Project",
    organization: "VMware",
    description: "Created the Cloud Day initiative requiring coordination across multiple Business Units and teams (Sales, Generalist and Specialist SEs). Delivered vision roadmap and technical sessions, executive keynotes, and hands-on labs. Managed budget, logistics, content creation, and stakeholder alignment for the event which was on a quarterly recurrence.",
    category: "Leadership",
    date: "2023",
    icon: TrendingUp,
    quote: "Thanks everyone for the very fruitful discussions and special kudos to Giorgia Morettin for the perfect organisation. Thank you Giorgia and team for the great organization and delivery! Great initiative! Well done.",
    quoteAuthor: "Director Cloud Solution Architects EMEA",
  },
];

const categories = ["All", "Award", "Project", "Speaking", "Leadership"] as const;

const categoryColors: Record<string, string> = {
  Award: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Project: "bg-blue-100 text-blue-700 border-blue-300",
  Speaking: "bg-purple-100 text-purple-700 border-purple-300",
  Customer: "bg-green-100 text-green-700 border-green-300",
  Leadership: "bg-orange-100 text-orange-700 border-orange-300",
};

export default function KeyAchievements() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  const getCategoryCount = (category: typeof categories[number]) => {
    if (category === "All") return achievements.length;
    return achievements.filter((a) => a.category === category).length;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Key Achievements & Recognition
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Projects, awards, speaking engagements, and customer impact demonstrating technical excellence and leadership
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {category} ({getCategoryCount(category)})
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredAchievements.map((achievement) => (
          <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    <achievement.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{achievement.title}</h3>
                    <p className="text-sm text-slate-600">{achievement.organization}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[achievement.category]}`}>
                  {achievement.category}
                </span>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>

              {achievement.impact && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 rounded">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-blue-700">Impact: </span>
                    {achievement.impact}
                  </p>
                </div>
              )}

              {achievement.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
              )}

              {achievement.quote && (
                <div className="bg-slate-50 p-4 rounded-lg mb-4 border-l-4 border-purple-500">
                  <p className="text-sm italic text-slate-700 mb-2">"{achievement.quote}"</p>
                  <p className="text-xs text-slate-600">— {achievement.quoteAuthor}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500">{achievement.date}</span>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
