import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-bold text-slate-900">Portfolio</span>
              </div>
            </Link>
            <div className="flex gap-4">
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/">
                <Button>Portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Cloud Solution Architect Portfolio</h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized in productivity assistant integration, cloud transformation, and enterprise solutions architecture.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                View Case Studies
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Microsoft 365 & Copilot */}
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-3" />
              <CardTitle>Modern Work & AI Assistants</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">AI Assistant Grounding & Optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Assistant Agent Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Teams, SharePoint, OneDrive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Modern Work Transformation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cloud Architecture */}
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-purple-600 mb-3" />
              <CardTitle>Cloud Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Azure Cloud Solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Security & Compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Scalable Infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Hybrid & Multi-Cloud</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Change Management */}
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-orange-600 mb-3" />
              <CardTitle>Change Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">User Adoption Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Organizational Transformation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Leadership & Communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">Training & Enablement</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">78% Teams Adoption in 3 Months</CardTitle>
                <CardDescription>Financial Services | 500 Employees</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Led comprehensive change management program to migrate from legacy communication platform to Microsoft Teams, achieving 78% adoption rate and 42% reduction in email volume.
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Key Results:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2">
                      <li>• 78% adoption rate (target: 70%)</li>
                      <li>• 42% reduction in email volume</li>
                      <li>• 4.2/5 user satisfaction</li>
                      <li>• 40% faster information retrieval</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">1,212% ROI on Assistant Investment</CardTitle>
                <CardDescription>Financial Services | 500 Employees</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Developed comprehensive business case for assistant implementation, securing executive approval and delivering 967% actual ROI in first year through productivity gains.
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Key Results:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2">
                      <li>• $3.2M value in year 1</li>
                      <li>• 967% actual ROI</li>
                      <li>• 72% adoption rate</li>
                      <li>• 30% reduction in task time</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">$1.2M Savings Through Architecture Optimization</CardTitle>
                <CardDescription>Manufacturing | 3000 Employees</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Influenced technical team to adopt Teams over Rocket.Chat through rigorous TCO analysis, resulting in $1.2M savings over 5 years and improved security posture.
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Key Results:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2">
                      <li>• $1.2M cost savings (5 years)</li>
                      <li>• 85% adoption rate</li>
                      <li>• Full compliance achieved</li>
                      <li>• Enhanced security & scalability</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Case Study 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">CRM Integration with Assistant Studio</CardTitle>
                <CardDescription>Sales Enablement | Enterprise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Architected and deployed custom assistant agent to integrate legacy CRM system, enabling sales team to access customer data and generate proposals 50% faster.
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Key Results:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mt-2">
                      <li>• 50% faster proposal generation</li>
                      <li>• 3 custom Topics deployed</li>
                      <li>• 100% data security compliance</li>
                      <li>• Seamless CRM integration</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Impact & Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">$5.2M</div>
              <p className="text-slate-600">Total Client Value Created</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-slate-600">Successful Implementations</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
              <p className="text-slate-600">Average Adoption Rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.6/5</div>
              <p className="text-slate-600">Average Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how productivity assistants and cloud solutions can drive productivity and business value for your organization.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Schedule a Consultation
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">About</h3>
              <p className="text-slate-600 text-sm">Cloud Solution Architect specializing in productivity assistants and enterprise transformation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Assistant Implementation</a></li>
                <li><a href="#" className="hover:text-blue-600">Architecture Design</a></li>
                <li><a href="#" className="hover:text-blue-600">Change Management</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-600">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600">Email</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>&copy; 2025 Cloud Solution Architect Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
