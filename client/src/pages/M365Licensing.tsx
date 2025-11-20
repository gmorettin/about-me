import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, ArrowRight, Building2, Users, Briefcase, Shield, Sparkles, Target } from "lucide-react";
import { Link } from "wouter";

export default function M365Licensing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              ← Back to Home
            </Button>
          </Link>
          <Link href="/">
            <Button>Go to Portfolio</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Microsoft 365 Licensing Guide</h1>
          <p className="text-xl text-slate-600">
            Complete comparison of all M365 and Office 365 licenses with pricing, features, and use cases
          </p>
        </div>

        {/* Decision Matrix - Use Cases */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-blue-600" />
              Which License for Which Customer?
            </CardTitle>
            <CardDescription>Quick decision matrix based on customer profile and needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-4 font-semibold text-slate-900">Customer Profile</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Company Size</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Key Needs</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Recommended License</th>
                    <th className="text-right p-4 font-semibold text-slate-900">Price/User/Month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Basic Productivity</div>
                      <div className="text-sm text-slate-600">Email, calendar, cloud storage</div>
                    </td>
                    <td className="p-4 text-slate-700">1-300 users</td>
                    <td className="p-4 text-slate-700">Web apps, 1TB storage, basic security</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Business Basic
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$6</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Desktop Apps Needed</div>
                      <div className="text-sm text-slate-600">Full Office suite, collaboration</div>
                    </td>
                    <td className="p-4 text-slate-700">1-300 users</td>
                    <td className="p-4 text-slate-700">Desktop apps, Teams, SharePoint</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        Business Standard
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$12.50</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Advanced Security</div>
                      <div className="text-sm text-slate-600">Compliance, threat protection, device management</div>
                    </td>
                    <td className="p-4 text-slate-700">1-300 users</td>
                    <td className="p-4 text-slate-700">Advanced security, Intune, Microsoft Entra ID P1</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        Business Premium
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$22</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Enterprise Collaboration</div>
                      <div className="text-sm text-slate-600">Large org, compliance, analytics</div>
                    </td>
                    <td className="p-4 text-slate-700">300+ users</td>
                    <td className="p-4 text-slate-700">Full apps, advanced compliance, Power BI</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Microsoft 365 E3
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$36</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Maximum Security & Compliance</div>
                      <div className="text-sm text-slate-600">Regulated industry, advanced threat protection</div>
                    </td>
                    <td className="p-4 text-slate-700">300+ users</td>
                    <td className="p-4 text-slate-700">E5 Security, Defender, eDiscovery, PSTN</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Microsoft 365 E5
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$57</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">Frontline Workers</div>
                      <div className="text-sm text-slate-600">Retail, manufacturing, healthcare workers</div>
                    </td>
                    <td className="p-4 text-slate-700">Any size</td>
                    <td className="p-4 text-slate-700">Mobile-first, shifts, task management</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Microsoft 365 F3
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-slate-900">$8</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-blue-50">
                    <td className="p-4">
                      <div className="font-medium text-slate-900 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-blue-600" />
                        AI-Powered Productivity
                      </div>
                      <div className="text-sm text-slate-600">Copilot for M365 add-on</div>
                    </td>
                    <td className="p-4 text-slate-700">Any size</td>
                    <td className="p-4 text-slate-700">
                      <span className="text-sm font-medium text-blue-700">Requires: E3, E5, Business Standard/Premium</span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        + Copilot for M365
                      </span>
                    </td>
                    <td className="p-4 text-right font-semibold text-blue-900">+$30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Side-by-Side Comparison Table */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Side-by-Side Feature Comparison
            </CardTitle>
            <CardDescription>Compare all licenses at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold text-slate-900 sticky left-0 bg-white z-10">Feature</th>
                    <th className="text-center p-3 font-semibold text-slate-900 bg-blue-50">Business<br/>Basic</th>
                    <th className="text-center p-3 font-semibold text-slate-900 bg-blue-50">Business<br/>Standard</th>
                    <th className="text-center p-3 font-semibold text-slate-900 bg-purple-50">Business<br/>Premium</th>
                    <th className="text-center p-3 font-semibold text-slate-900 bg-green-50">M365 E3</th>
                    <th className="text-center p-3 font-semibold text-slate-900 bg-red-50">M365 E5</th>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-3 text-xs text-slate-600 sticky left-0 bg-white z-10">Price/user/month</th>
                    <th className="text-center p-3 text-xs font-bold text-blue-700 bg-blue-50">$6</th>
                    <th className="text-center p-3 text-xs font-bold text-blue-700 bg-blue-50">$12.50</th>
                    <th className="text-center p-3 text-xs font-bold text-purple-700 bg-purple-50">$22</th>
                    <th className="text-center p-3 text-xs font-bold text-green-700 bg-green-50">$36</th>
                    <th className="text-center p-3 text-xs font-bold text-red-700 bg-red-50">$57</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Core Apps */}
                  <tr className="bg-slate-100">
                    <td colSpan={6} className="p-3 font-semibold text-slate-900 sticky left-0 bg-slate-100 z-10">
                      Core Applications
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Web & mobile apps (Word, Excel, PPT, Outlook)</td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Desktop apps (Windows & Mac)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">
                      Microsoft Teams
                      <div className="text-xs text-blue-600 mt-1">
                        (As of Nov 1, 2025: bundled again. "No Teams" versions available at lower price)
                      </div>
                    </td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">OneDrive storage</td>
                    <td className="text-center p-3 text-xs text-slate-600">1 TB</td>
                    <td className="text-center p-3 text-xs text-slate-600">1 TB</td>
                    <td className="text-center p-3 text-xs text-slate-600">1 TB</td>
                    <td className="text-center p-3 text-xs text-slate-600">Unlimited</td>
                    <td className="text-center p-3 text-xs text-slate-600">Unlimited</td>
                  </tr>

                  {/* Security & Compliance */}
                  <tr className="bg-slate-100">
                    <td colSpan={6} className="p-3 font-semibold text-slate-900 sticky left-0 bg-slate-100 z-10">
                      Security & Compliance
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Entra ID P1</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Entra ID P2</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Intune (MDM/MAM)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Defender for Office 365 (Plan 1)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Defender for Office 365 (Plan 2)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Defender for Endpoint</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Data Loss Prevention (DLP)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Advanced eDiscovery</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>

                  {/* Analytics & Intelligence */}
                  <tr className="bg-slate-100">
                    <td colSpan={6} className="p-3 font-semibold text-slate-900 sticky left-0 bg-slate-100 z-10">
                      Analytics & Intelligence
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Power BI Pro</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Microsoft Viva Insights</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">MyAnalytics / Viva Insights (Personal)</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>

                  {/* Voice & Calling */}
                  <tr className="bg-slate-100">
                    <td colSpan={6} className="p-3 font-semibold text-slate-900 sticky left-0 bg-slate-100 z-10">
                      Voice & Calling
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Teams Phone System</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-white z-10">Audio Conferencing</td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                    <td className="text-center p-3"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>

                  {/* AI & Copilot */}
                  <tr className="bg-blue-100">
                    <td colSpan={6} className="p-3 font-semibold text-blue-900 sticky left-0 bg-blue-100 z-10 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      AI & Copilot (Add-on)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-blue-50">
                    <td className="p-3 text-slate-700 sticky left-0 bg-blue-50 z-10 font-medium">Copilot for Microsoft 365</td>
                    <td className="text-center p-3 text-xs text-slate-600">Not available</td>
                    <td className="text-center p-3 text-xs text-green-700 font-medium">+$30/user</td>
                    <td className="text-center p-3 text-xs text-green-700 font-medium">+$30/user</td>
                    <td className="text-center p-3 text-xs text-green-700 font-medium">+$30/user</td>
                    <td className="text-center p-3 text-xs text-green-700 font-medium">+$30/user</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Upgrade Path */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-6 w-6 text-purple-600" />
              Upgrade Path & ROI
            </CardTitle>
            <CardDescription>How to grow with your customer's needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Business to Enterprise */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Business → Enterprise Upgrade</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Business Premium ($22)
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-400" />
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      M365 E3 ($36)
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>When:</strong> Company grows beyond 300 users, needs unlimited storage, Power BI Pro
                  </div>
                </div>
                <div className="mt-2 p-3 bg-green-50 rounded-lg text-sm text-green-800">
                  <strong>ROI Benefit:</strong> Unlimited OneDrive, advanced analytics with Power BI, better compliance tools
                </div>
              </div>

              {/* E3 to E5 */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">E3 → E5 Upgrade</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      M365 E3 ($36)
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-400" />
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      M365 E5 ($57)
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>When:</strong> Regulated industry, advanced threat protection needed, PSTN calling required
                  </div>
                </div>
                <div className="mt-2 p-3 bg-red-50 rounded-lg text-sm text-red-800">
                  <strong>ROI Benefit:</strong> Advanced security (Defender P2, Azure AD P2), eDiscovery, Phone System, Audio Conferencing
                </div>
              </div>

              {/* Copilot Add-on */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Adding Copilot for M365</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Any eligible license
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-400" />
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                      + Copilot ($30)
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Requires:</strong> M365 E3/E5, Business Standard/Premium
                  </div>
                </div>
                <div className="mt-2 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                  <strong>ROI Benefit:</strong> 29% faster task completion, 1,212% ROI (SMB study), AI-powered productivity across all M365 apps
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Talking Points */}
        <Card>
          <CardHeader>
            <CardTitle>Key Talking Points for Interviews</CardTitle>
            <CardDescription>What to emphasize when discussing licensing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Business Licenses (1-300 users)
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Basic:</strong> Perfect for startups needing email & cloud storage only</li>
                  <li>• <strong>Standard:</strong> Most popular for SMBs - includes desktop apps</li>
                  <li>• <strong>Premium:</strong> Best for security-conscious SMBs, includes Intune & advanced threat protection</li>
                  <li>• <strong>Copilot eligible:</strong> Standard & Premium only</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Enterprise Licenses (300+ users)
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>E3:</strong> Core enterprise license - unlimited storage, Power BI, advanced compliance</li>
                  <li>• <strong>E5:</strong> Maximum security & compliance - Defender P2, Azure AD P2, Phone System</li>
                  <li>• <strong>F3:</strong> Frontline workers - mobile-first, shifts, task management</li>
                  <li>• <strong>Copilot eligible:</strong> E3 & E5</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Copilot for Microsoft 365 - Two Pricing Models
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-blue-900 mb-2">1. Standard License Model (Most Common)</h5>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• <strong>Price:</strong> $30/user/month (flat rate add-on)</li>
                    <li>• <strong>Base license required:</strong> M365 E3, E5, Business Standard, or Business Premium</li>
                    <li>• <strong>What's included:</strong> Full Copilot in Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop + Work-based Chat</li>
                    <li>• <strong>Best for:</strong> Enterprise-wide deployment with predictable costs</li>
                  </ul>
                </div>
                <div className="border-t border-blue-200 pt-3">
                  <h5 className="font-semibold text-blue-900 mb-2">2. Pay-As-You-Go Model (NEW - Jan 2025)</h5>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• <strong>Price:</strong> Consumption-based (billed via Azure subscription)</li>
                    <li>• <strong>What's included:</strong> Copilot Chat + SharePoint agents</li>
                    <li>• <strong>Best for:</strong> Pilots, testing adoption patterns, variable usage scenarios</li>
                    <li>• <strong>Features:</strong> Budget limits, cost monitoring, no commitment required</li>
                  </ul>
                </div>
                <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-900">
                  <strong>Interview Tip:</strong> Know when to recommend each model - $30/user for full deployment, pay-as-you-go for pilots or proof-of-concept
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Personas & Decision Framework */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Customer Personas & Decision Framework
            </CardTitle>
            <CardDescription>
              Which customer should buy which license? Understanding customer profiles and decision criteria.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SMB Customer */}
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-lg text-slate-900 mb-2">Small Business (1-300 employees)</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-blue-600">Recommended:</span> Business Basic → Business Standard → Business Premium
                  </div>
                  <div>
                    <span className="font-semibold">Profile:</span> Limited IT staff, budget-conscious, need simplicity
                  </div>
                  <div>
                    <span className="font-semibold">Use Cases:</span>
                    <ul className="mt-1 ml-4 space-y-1 text-slate-600">
                      <li>• Professional services firms (law, consulting)</li>
                      <li>• Retail stores with office staff</li>
                      <li>• Small manufacturing companies</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <span className="font-semibold text-green-900">Why Business Premium?</span>
                    <p className="text-green-800 mt-1">Advanced security (Defender, DLP), device management, and Copilot-ready for $22/user - best value for SMBs wanting enterprise-grade protection.</p>
                  </div>
                </div>
              </div>

              {/* Mid-Market Customer */}
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-lg text-slate-900 mb-2">Mid-Market (300-5,000 employees)</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-blue-600">Recommended:</span> M365 E3 → M365 E5
                  </div>
                  <div>
                    <span className="font-semibold">Profile:</span> Dedicated IT team, compliance requirements, growth-focused
                  </div>
                  <div>
                    <span className="font-semibold">Use Cases:</span>
                    <ul className="mt-1 ml-4 space-y-1 text-slate-600">
                      <li>• Financial services (compliance heavy)</li>
                      <li>• Healthcare organizations (HIPAA)</li>
                      <li>• Growing tech companies</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <span className="font-semibold text-green-900">Why E3?</span>
                    <p className="text-green-800 mt-1">Unlimited storage, Power BI, advanced compliance tools, and Copilot-ready at $36/user. Perfect balance of features and cost for mid-market.</p>
                  </div>
                </div>
              </div>

              {/* Enterprise Customer */}
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-lg text-slate-900 mb-2">Enterprise (5,000+ employees)</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-blue-600">Recommended:</span> M365 E5 (or E3 + E5 Security)
                  </div>
                  <div>
                    <span className="font-semibold">Profile:</span> Large IT organization, strict security/compliance, global presence
                  </div>
                  <div>
                    <span className="font-semibold">Use Cases:</span>
                    <ul className="mt-1 ml-4 space-y-1 text-slate-600">
                      <li>• Fortune 500 companies</li>
                      <li>• Government agencies</li>
                      <li>• Multinational corporations</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <span className="font-semibold text-green-900">Why E5?</span>
                    <p className="text-green-800 mt-1">Maximum security (Defender P2, Microsoft Entra ID P2), advanced compliance (eDiscovery, insider risk), Phone System, and advanced analytics at $57/user.</p>
                  </div>
                </div>
              </div>

              {/* Frontline Workers */}
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-semibold text-lg text-slate-900 mb-2">Frontline Workers</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-blue-600">Recommended:</span> M365 F3 ($8/user)
                  </div>
                  <div>
                    <span className="font-semibold">Profile:</span> Mobile-first, task-based workers, no desktop needed
                  </div>
                  <div>
                    <span className="font-semibold">Use Cases:</span>
                    <ul className="mt-1 ml-4 space-y-1 text-slate-600">
                      <li>• Retail store employees</li>
                      <li>• Healthcare nurses and staff</li>
                      <li>• Manufacturing floor workers</li>
                      <li>• Hospitality staff</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 rounded">
                    <span className="font-semibold text-green-900">Why F3?</span>
                    <p className="text-green-800 mt-1">Mobile-optimized, Shifts scheduling, task management, Teams communication, and basic security at just $8/user - perfect for deskless workers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-4 text-lg">Decision Framework: Key Questions to Ask</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-blue-800">1. Company Size & Growth?</span>
                  <p className="text-blue-700 mt-1">{'<'} 300: Business plans | 300-5K: E3 | 5K+: E5 or hybrid</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-800">2. Compliance Requirements?</span>
                  <p className="text-blue-700 mt-1">HIPAA, GDPR, SOC 2 → E3 minimum | Advanced eDiscovery → E5</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-800">3. Security Posture?</span>
                  <p className="text-blue-700 mt-1">Basic: Business Premium | Advanced: E3 | Maximum: E5</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-800">4. Copilot Adoption Plans?</span>
                  <p className="text-blue-700 mt-1">Need E3, E5, Business Standard/Premium as base license</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-800">5. Voice/Calling Needs?</span>
                  <p className="text-blue-700 mt-1">Phone System included in E5 | Add-on for E3/Business</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-800">6. Budget Constraints?</span>
                  <p className="text-blue-700 mt-1">Start with E3 or Business Premium, upgrade to E5 later</p>
                </div>
              </div>
            </div>

            {/* Common Customer Questions */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-slate-900 mb-4">Common Customer Questions & How to Answer</h4>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                  <p className="font-semibold text-slate-900">Q: "Why should we pay $57 for E5 when E3 is $36?"</p>
                  <p className="text-slate-700 mt-2"><strong>Answer:</strong> E5 includes Defender for Endpoint P2 (worth $5.20/user), Microsoft Entra ID P2 ($9/user), advanced compliance tools, and Phone System. If you buy these separately with E3, you'd pay more than E5. Plus, E5 provides advanced threat protection that can prevent costly breaches - one ransomware attack costs $4.5M on average.</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                  <p className="font-semibold text-slate-900">Q: "Can we mix licenses (some E3, some E5)?"</p>
                  <p className="text-slate-700 mt-2"><strong>Answer:</strong> Yes! Common strategy: E5 for executives and high-risk users (finance, legal), E3 for general staff, F3 for frontline workers. This optimizes cost while protecting critical users.</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                  <p className="font-semibold text-slate-900">Q: "Should we go Business Premium or jump to E3?"</p>
                  <p className="text-slate-700 mt-2"><strong>Answer:</strong> Business Premium ($22) is great for {'<'}300 users with strong security needs. E3 ($36) makes sense when you need: unlimited storage, Power BI Pro, advanced compliance, or plan to scale beyond 300 users. If Copilot adoption is a priority, both work as base licenses.</p>
                </div>
                <div className="p-4 border-l-4 border-blue-500 bg-slate-50">
                  <p className="font-semibold text-slate-900">Q: "What's the ROI of Copilot at $30/user/month?"</p>
                  <p className="text-slate-700 mt-2"><strong>Answer:</strong> Studies show Copilot users save 10-12 hours/month on average. At $50/hour labor cost, that's $500-600/month in productivity gains vs $30/month cost = 16-20x ROI. Plus, 70% of users report higher quality work output.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
