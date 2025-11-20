import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Briefcase, GraduationCap, Award, Sparkles } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  type: "work" | "education" | "achievement";
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2023 - 2025",
    title: "Enterprise Architect",
    company: "Boomi",
    type: "work",
    description: "Leading AI-powered digital transformation initiatives for Fortune 500 customers",
    highlights: [
      "Architecting enterprise integration solutions across multi-cloud environments",
      "Driving customer success with AI and automation technologies",
      "Leading technical engagements with C-level executives"
    ],
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-blue-600 to-blue-700"
  },
  {
    year: "2023",
    title: "Oracle Cloud Infrastructure AI Certified",
    company: "Oracle",
    type: "achievement",
    description: "Achieved Oracle Cloud Infrastructure 2023 AI Certified Professional certification",
    highlights: [
      "Demonstrated expertise in AI services and machine learning",
      "Validated cloud AI architecture and deployment skills"
    ],
    icon: <Award className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2020 - 2023",
    title: "Solutions Architect - Cloud Team",
    company: "VMware",
    type: "work",
    description: "Architected Oracle Cloud VMware Solution (OCVS) deployments for enterprise clients",
    highlights: [
      "Led technical pre-sales and solution design for cloud migrations",
      "Delivered customer workshops on VMware Cloud technologies",
      "Collaborated cross-functionally to drive adoption and success"
    ],
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-purple-600 to-purple-700"
  },
  {
    year: "2018 - 2020",
    title: "Cloud & Digital Transformation Focus",
    company: "Career Development",
    type: "education",
    description: "Specialized in cloud architecture and digital transformation methodologies",
    highlights: [
      "Developed expertise in multi-cloud strategies",
      "Focused on customer success and change management",
      "Built foundation in AI and automation technologies"
    ],
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-green-600 to-green-700"
  }
];

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          Professional Journey
        </h3>
        <p className="text-lg text-slate-600">
          From cloud architecture to AI-powered enterprise transformation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Navigation */}
        <div className="lg:col-span-1 space-y-4">
          {timelineEvents.map((event, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedEvent(idx)}
              className={`w-full text-left transition-all duration-300 ${
                selectedEvent === idx ? "scale-105" : "hover:scale-102"
              }`}
            >
              <Card className={`backdrop-blur-sm border-2 ${
                selectedEvent === idx
                  ? "bg-white shadow-lg border-blue-500"
                  : "bg-white/70 border-slate-200 hover:border-blue-300"
              }`}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {event.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-blue-600 mb-1">
                        {event.year}
                      </div>
                      <div className="text-sm font-bold text-slate-900 mb-1 truncate">
                        {event.title}
                      </div>
                      <div className="text-xs text-slate-600 truncate">
                        {event.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Event Details */}
        <div className="lg:col-span-2">
          <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50 h-full">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${timelineEvents[selectedEvent].color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {timelineEvents[selectedEvent].icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {timelineEvents[selectedEvent].year}
                    </Badge>
                    <Badge variant="outline">
                      {timelineEvents[selectedEvent].type === "work" && "Professional Experience"}
                      {timelineEvents[selectedEvent].type === "education" && "Education & Development"}
                      {timelineEvents[selectedEvent].type === "achievement" && "Certification"}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    {timelineEvents[selectedEvent].title}
                  </h4>
                  <p className="text-lg text-blue-600 font-semibold">
                    {timelineEvents[selectedEvent].company}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                {timelineEvents[selectedEvent].description}
              </p>

              <div className="space-y-3">
                <h5 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  Key Highlights
                </h5>
                <ul className="space-y-3">
                  {timelineEvents[selectedEvent].highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-slate-700 flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Timeline Progress</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {selectedEvent + 1} of {timelineEvents.length}
                  </span>
                </div>
                <div className="flex gap-2">
                  {timelineEvents.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedEvent(idx)}
                      className={`flex-1 h-2 rounded-full transition-all ${
                        idx === selectedEvent
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : idx < selectedEvent
                          ? "bg-blue-300"
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setSelectedEvent(Math.max(0, selectedEvent - 1))}
          disabled={selectedEvent === 0}
          className="px-6 py-3 rounded-lg bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          ← Previous
        </button>
        <button
          onClick={() => setSelectedEvent(Math.min(timelineEvents.length - 1, selectedEvent + 1))}
          disabled={selectedEvent === timelineEvents.length - 1}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
