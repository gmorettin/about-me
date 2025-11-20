import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export default function ROICalculator() {
  const [users, setUsers] = useState(500);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [timeSaved, setTimeSaved] = useState(30); // percentage

  // Assistant pricing (generic)
  const assistantCostPerUser = 30; // $30/user/month
  const monthsPerYear = 12;

  // Calculations
  const annualAssistantCost = users * assistantCostPerUser * monthsPerYear;
  const hourlyRate = avgSalary / 2080; // 2080 working hours per year
  const hoursPerUserPerMonth = (2080 / 12) * (timeSaved / 100);
  const annualTimeSavings = users * hoursPerUserPerMonth * 12 * hourlyRate;
  const netBenefit = annualTimeSavings - annualAssistantCost;
  const roi = ((netBenefit / Math.max(1, annualAssistantCost)) * 100).toFixed(0);
  const paybackMonths = (annualAssistantCost / Math.max(1, (annualTimeSavings / 12))).toFixed(1);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-3">
          Interactive ROI Calculator
        </h3>
          <p className="text-lg text-slate-600">
          Calculate the business value of a productivity assistant for your organization
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50">
          <CardContent className="pt-6">
            <h4 className="text-xl font-semibold text-slate-900 mb-6">Your Organization</h4>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="users" className="text-slate-700 font-medium">
                  Number of Users
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <Input
                    id="users"
                    type="number"
                    value={users}
                    onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value) || 0))}
                    className="flex-1"
                    min="1"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Typical range: 100-10,000 users
                </p>
              </div>

              <div>
                <Label htmlFor="salary" className="text-slate-700 font-medium">
                  Average Annual Salary ($)
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <Input
                    id="salary"
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Math.max(1, parseInt(e.target.value) || 0))}
                    className="flex-1"
                    min="1"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Knowledge worker average: $60,000-$100,000
                </p>
              </div>

              <div>
                <Label htmlFor="timeSaved" className="text-slate-700 font-medium">
                  Time Saved per User (%)
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <Input
                    id="timeSaved"
                    type="number"
                    value={timeSaved}
                    onChange={(e) => setTimeSaved(Math.max(1, Math.min(100, parseInt(e.target.value) || 0)))}
                    className="flex-1"
                    min="1"
                    max="100"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Industry research shows 10-40% productivity gains depending on use case
                </p>
              </div>

              <Button 
                onClick={() => {
                  setUsers(500);
                  setAvgSalary(75000);
                  setTimeSaved(30);
                }}
                variant="outline"
                className="w-full"
              >
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-4">
          <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Return on Investment</h4>
              </div>
              <div className="text-5xl font-bold mb-2">{roi}%</div>
              <p className="text-blue-100">First year ROI</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/70 border-slate-200/50">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Financial Breakdown</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-600">Annual Assistant Cost</span>
                  <span className="text-xl font-bold text-red-600">
                    ${annualAssistantCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-600">Annual Time Savings Value</span>
                  <span className="text-xl font-bold text-green-600">
                    ${annualTimeSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-600">Net Annual Benefit</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${netBenefit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Payback Period</span>
                  <span className="text-xl font-bold text-purple-600">
                    {paybackMonths} months
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">Key Insights</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Each user saves ~{hoursPerUserPerMonth.toFixed(0)} hours/month</li>
                <li>• Total annual hours saved: {(users * hoursPerUserPerMonth * 12).toLocaleString()} hours</li>
                <li>• Cost per user: ${assistantCostPerUser}/month (${assistantCostPerUser * 12}/year)</li>
                <li>• Break-even at {paybackMonths} months, then pure profit</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-100 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-600 text-center">
          <strong>Note:</strong> These calculations are illustrative and based on industry averages. 
          Actual results vary by organization, use case, and adoption rate. Conservative estimates show 10-20% productivity gains, 
          while high-adoption organizations report 30-40% improvements in specific workflows.
        </p>
      </div>
    </div>
  );
}
