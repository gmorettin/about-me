import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  // Modern Work & AI
  { name: "Modern Work Architecture", level: 85, category: "Modern Work" },
  { name: "AI Assistants Integration", level: 90, category: "Modern Work" },
  { name: "Teams & Collaboration", level: 88, category: "Modern Work" },
  { name: "Change Management", level: 92, category: "Modern Work" },
  { name: "Adoption Strategies", level: 90, category: "Modern Work" },
  
  // Customer Success
  { name: "Executive Engagement", level: 95, category: "Customer Success" },
  { name: "Solution Design", level: 90, category: "Customer Success" },
  { name: "ROI Articulation", level: 93, category: "Customer Success" },
  { name: "Technical Enablement", level: 88, category: "Customer Success" },
  
  // Technical
  { name: "Multi-Cloud Architecture", level: 92, category: "Technical" },
  { name: "AI & Machine Learning", level: 85, category: "Technical" },
  { name: "Enterprise Integration", level: 95, category: "Technical" },
  { name: "Security & Compliance", level: 87, category: "Technical" },
];

export default function SkillsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 120;
    const numSkills = skills.length;
    const angleStep = (2 * Math.PI) / numSkills;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw concentric circles (grid)
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius / 5) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 1;
    for (let i = 0; i < numSkills; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw skill polygon
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let i = 0; i < numSkills; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw skill points
    for (let i = 0; i < numSkills; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Point
      ctx.fillStyle = hoveredSkill === skill.name ? "#8b5cf6" : "#3b82f6";
      ctx.beginPath();
      ctx.arc(x, y, hoveredSkill === skill.name ? 8 : 6, 0, 2 * Math.PI);
      ctx.fill();

      // Label
      const labelRadius = maxRadius + 50;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = "#1e293b";
      ctx.font = "12px system-ui, -apple-system, sans-serif";
      ctx.textAlign = labelX > centerX ? "left" : "right";
      ctx.textBaseline = "middle";
      ctx.fillText(skill.name, labelX, labelY);
    }

    // Draw percentage labels on circles
    ctx.fillStyle = "#94a3b8";
    ctx.font = "10px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let i = 1; i <= 5; i++) {
      const percentage = (i * 20).toString() + "%";
      ctx.fillText(percentage, centerX - 5, centerY - (maxRadius / 5) * i);
    }
  }, [hoveredSkill]);

  const categoryColors: Record<string, string> = {
    "Modern Work": "bg-blue-100 text-blue-700 border-blue-300",
    "Customer Success": "bg-purple-100 text-purple-700 border-purple-300",
    "Technical": "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          Skills & Competencies
        </h3>
        <p className="text-lg text-slate-600">
          Comprehensive skill assessment aligned with professional competencies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Radar Chart */}
        <div className="lg:col-span-2">
          <Card className={`backdrop-blur-sm bg-white/70 border-slate-200/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="pt-8 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={600}
                height={600}
                className="max-w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Skill Levels</h4>
              <div className="space-y-3">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      hoveredSkill === skill.name
                        ? "bg-blue-50 border-blue-300 scale-105"
                        : "bg-slate-50 border-slate-200"
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-900">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[skill.category]}`}>
                        {skill.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700 w-10 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Assessment Methodology</h4>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>• Self-assessment based on years of experience</li>
                <li>• Validated against project outcomes</li>
                <li>• Aligned with Microsoft CSA competency framework</li>
                <li>• Continuously updated with new certifications</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
