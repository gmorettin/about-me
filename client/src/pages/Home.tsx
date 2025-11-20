import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Package, Zap, Target, Brain } from "lucide-react";
import { APP_LOGO } from "@/const";
import { Link } from "wouter";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-slate-900">Giorgia Morettin — Portfolio</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/portfolio">
              <Button variant="outline">Public Portfolio</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Interview Preparation & Resources
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Curated resources, experience mapping, and example answers to showcase skills and prepare for technical customer-facing roles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/experience-mapping">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Experience Mapping
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Package className="mr-2 h-5 w-5" />
                    Licensing Guide
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex gap-8 text-sm text-slate-600">
                <div>
                  <div className="font-semibold text-slate-900">70+</div>
                  <div>Interview Questions</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">10</div>
                  <div>Experience Mappings</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">3</div>
                  <div>Categories</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/images/portfolio-hero.png"
                alt="Portfolio"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Your Preparation Tools</h3>
            <p className="text-lg text-slate-600">Everything you need for tomorrow's interview</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>70+ Questions</CardTitle>
                <CardDescription>Behavioral, Technical, Commercial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Complete answer guides with STAR method, key points, and example answers for each question.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Experience Mapping</CardTitle>
                <CardDescription>Your strengths & gaps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Point-by-point mapping between your Boomi/VMware experience and Microsoft's requirements.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Interactive Quiz</CardTitle>
                <CardDescription>Test your knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Practice with interactive quizzes and get feedback on areas to improve.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Link href="/m365-licensing">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Package className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>M365 Licensing Guide</CardTitle>
                  <CardDescription>Complete comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Interactive comparison of all M365 and Office 365 licenses with pricing, features, and use cases.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">What's Covered</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Behavioral */}
            <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Behavioral Questions</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Change management & adoption strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Business value & ROI justification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Leadership & influence techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Conflict resolution & communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Growth mindset & continuous learning</span>
                </li>
              </ul>
            </div>

            {/* Technical */}
            <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Technical Questions</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>M365 Copilot grounding & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Copilot Studio agent development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Security & compliance architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Solution design & troubleshooting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Integration with legacy systems</span>
                </li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="border border-slate-200 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Commercial Questions</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Business case development & ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Customer success & retention strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Value realization & adoption metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Competitive positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Account management & expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready for Tomorrow's Interview?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Start reviewing your preparation materials now.
          </p>
          <Link href="/portfolio">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600">
          <p>Portfolio and public resources — Giorgia Morettin</p>
        </div>
      </footer>
    </div>
  );
}
