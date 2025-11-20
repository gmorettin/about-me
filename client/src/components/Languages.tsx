import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface Language {
  name: string;
  flag: string;
  level: string;
  proficiency: number; // 0-100
}

const languages: Language[] = [
  {
    name: "English",
    flag: "🇬🇧",
    level: "Native / Fluent",
    proficiency: 100,
  },
  {
    name: "Italian",
    flag: "🇮🇹",
    level: "Native / Fluent",
    proficiency: 100,
  },
  {
    name: "Spanish",
    flag: "🇪🇸",
    level: "Professional Working",
    proficiency: 100,
  },
  {
    name: "Catalan",
    flag: "🏳️",
    level: "Professional Working",
    proficiency: 100,
  },
  {
    name: "French",
    flag: "🇫🇷",
    level: "Intermediate",
    proficiency: 25,
  },
];

export default function Languages() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
          <Globe className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Languages</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Multilingual capability enabling effective communication across EMEA markets
        </p>
      </div>

      {/* Languages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {languages.map((language, index) => (
          <Card
            key={index}
            className="backdrop-blur-sm bg-white/70 border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-6 text-center">
              {/* Flag */}
              <div className="text-5xl mb-4">{language.flag}</div>

              {/* Language Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {language.name}
              </h3>

              {/* Level */}
              <p className="text-sm text-slate-600 mb-4">{language.level}</p>

              {/* Proficiency Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center">
        <p className="text-sm text-slate-600 max-w-3xl mx-auto">
          Multilingual capabilities enable me to engage with customers, partners, and teams across
          diverse EMEA markets, facilitating technical discussions and executive presentations in
          their preferred language.
        </p>
      </div>
    </div>
  );
}
