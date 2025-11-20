import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  context: string;
  category: "customer" | "manager" | "partner" | "speaker";
}

const testimonials: Testimonial[] = [
  {
    name: "T.C.",
    role: "Oracle Cloud Infrastructure Specialist",
    company: "Oracle",
    quote: "Giorgia's expertise and dedication in preparing and conducting the webinar were exceptional. She demonstrated a deep understanding of the subject matter and engaged the audience effectively throughout the session. Her presentation style was clear, engaging, and insightful, which contributed significantly to the webinar's success, one of the most followed during 2022.",
    context: "Oracle Cloud VMware Service (OCVS) webinar collaboration - Italian market",
    category: "partner"
  },
  {
    name: "C.Q.",
    role: "Manager, Solution Engineering - Multi Cloud Digital Solutions EMEA",
    company: "VMware",
    quote: "Great report Giorgia, thank you very much! Feeling confident on running/orchestrating the next one.",
    context: "Weekly FY24 report and POC orchestration",
    category: "manager"
  },
  {
    name: "A.R.",
    role: "Solutions Engineering Leader",
    company: "VMware",
    quote: "I already told Georgi--snip--a: her work on the VCDR POC Miro board is great! It's an awesome doc that can help a lot on formalizing the whole process.",
    context: "Dashboard template for project management of engagements and delivery of VCDR POCs with partners",
    category: "manager"
  },
  {
    name: "B.N.",
    role: "AWS Solutions Architect",
    company: "Amazon Web Services",
    quote: "Excellent, I think it covers everything we need to come up with a good Best Practices Guide.",
    context: "VMware on AWS Sizing EMEA Best Practices Guidelines Project collaboration",
    category: "customer"
  },
  {
    name: "V.B.",
    role: "VMware Cloud on AWS Solutions Architect",
    company: "VMware",
    quote: "We have over a dozen entries on the Miro board, and I expect a few more in advance of the meeting. As expected, the results vary widely, proving the need for a more standardized approach. Using the input from the meeting, I suggest the four of us gather in January to flesh out the Best Practices that we started.",
    context: "VMware Cloud on AWS sizing standardization initiative",
    category: "partner"
  },
  {
    name: "C.Q.",
    role: "Manager, Solution Engineering - Multi Cloud Digital Solutions EMEA",
    company: "VMware",
    quote: "I'm very happy to award you as the Multi Cloud SE of the 4th Quarter. This is not only for the high number of both customer and internal activities executed, but for showing initiative and leadership in projects like the Core/Cloud SE Days. Your growth in the team and as a SE, over the last months, is noticeable and recognizable! Keep the good energy!",
    context: "'Achieve Our Best' Award - Multi Cloud SE of Q4 2023",
    category: "manager"
  },
  {
    name: "A.G.",
    role: "Director Cloud Solution Architects, Cloud Providers - EMEA",
    company: "VMware",
    quote: "So glad having the opportunity to meet & talk with our great DSC team! Thanks everyone for the very fruitful discussions and special kudos to Giorgia Morettin for the perfect organisation.",
    context: "DSC team event organization and leadership recognition",
    category: "manager"
  },
  {
    name: "M.A.",
    role: "Senior Staff Solution Architect, VMware Cloud on AWS | Office of the CTO, Ambassador",
    company: "VMware",
    quote: "I'm a big fan of giving credit when it's due and I would like to call out Giorgia for the recent work she has done creating a simple, easy to read .pdf based off the back of the networking basics session... She has clearly spent a lot of time researching and creating this .pdf which I think it a great way of taking a lot of technical content and presenting it in a way that is easy to read but more importantly quickly understand the main concepts... Brilliant work.",
    context: "Technical content creation - Networking basics PDF for DSC team",
    category: "manager"
  },
  {
    name: "K.S.",
    role: "Manager",
    company: "VMware",
    quote: "I've very proud of you, I can see the progress you are doing.",
    context: "Q3 2022 performance review and career development",
    category: "manager"
  },
  {
    name: "L.B.",
    role: "Senior Director of Cloud Solution Architecture, EMEA",
    company: "VMware",
    quote: "Fantastic and very well done Giorgia 😊👏",
    context: "Award recognition and performance excellence",
    category: "manager"
  },
  {
    name: "VMware",
    role: "Fiscal Year 2023 Performance Award",
    company: "VMware",
    quote: "Recognized for significant contribution to VMware's success with the Systems Multi-Cloud Performance Award.",
    context: "FY2023 Systems Multi-Cloud Performance Award - Formal company recognition",
    category: "manager"
  },
  {
    name: "Boomi Marketing",
    role: "Integration & AI Webinar",
    company: "Boomi",
    quote: "Hai 30 minuti? Ti mostriamo come l'AI sta cambiando il mondo dell'integrazione & automazione",
    context: "Featured speaker for Boomi webinar on AI-powered integration and automation - Italian market",
    category: "speaker"
  },
  {
    name: "Boomi Event Milano",
    role: "AI Speaker at Customer Event",
    company: "Boomi",
    quote: "It was a privilege to meet with our Italian customers during this exclusive event last week in the beautiful Piazza Duomo in Milano! 🏛️ We had meaningful discussions about our Roadmap and explored how AI can drive innovation and growth in a low-code no-code approach 🚀",
    context: "AI and Innovation speaker at exclusive Boomi customer event in Milano - Piazza Duomo",
    category: "speaker"
  }
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "customer" | "manager" | "partner" | "speaker">("all");

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const categoryColors = {
    customer: "bg-blue-100 text-blue-700 border-blue-300",
    manager: "bg-purple-100 text-purple-700 border-purple-300",
    partner: "bg-green-100 text-green-700 border-green-300",
    speaker: "bg-orange-100 text-orange-700 border-orange-300"
  };

  const categoryLabels = {
    customer: "Customer",
    manager: "Manager",
    partner: "Partner",
    speaker: "Speaker"
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
          <Star className="h-10 w-10 text-yellow-500 fill-yellow-500" />
          <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          What Colleagues & Partners Say
        </h3>
        <p className="text-lg text-slate-600 mb-6">
          Testimonials from customers, managers, and technology partners
        </p>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All ({testimonials.length})
          </button>
          {(["customer", "manager", "partner", "speaker"] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {categoryLabels[cat]} ({testimonials.filter(t => t.category === cat).length})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial, idx) => (
          <Card 
            key={idx} 
            className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <CardContent className="pt-6">
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-10 w-10 text-blue-600/20" />
                <Badge className={`${categoryColors[testimonial.category]} border`}>
                  {categoryLabels[testimonial.category]}
                </Badge>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Context */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-800">
                  <strong>Context:</strong> {testimonial.context}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-start gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.name}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-600 leading-tight">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-blue-600 font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">No testimonials in this category</p>
        </div>
      )}

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <h4 className="font-semibold text-slate-900">Key Themes</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
          <div className="text-center">
            <div className="font-bold text-blue-600 mb-1">Technical Excellence</div>
            <p>Deep subject matter expertise and clear communication</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 mb-1">Customer-Centric</div>
            <p>Understanding needs and delivering real solutions</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-green-600 mb-1">Collaboration</div>
            <p>Cross-functional teamwork and process improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
