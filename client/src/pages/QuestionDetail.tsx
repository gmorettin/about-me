import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, CheckCircle2, Target, Home } from "lucide-react";
import { Link, useParams } from "wouter";
import { fullQuestionsData } from "@shared/full-questions-data";

export default function QuestionDetail() {
  const params = useParams();
  const questionId = parseInt(params.id || "1");
  
  const question = fullQuestionsData.find(q => q.id === questionId);
  const currentIndex = fullQuestionsData.findIndex(q => q.id === questionId);
  const previousQuestion = currentIndex > 0 ? fullQuestionsData[currentIndex - 1] : null;
  const nextQuestion = currentIndex < fullQuestionsData.length - 1 ? fullQuestionsData[currentIndex + 1] : null;

  if (!question) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Question Not Found</CardTitle>
            <CardDescription>The question you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button>Back</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Behavioral":
        return "bg-blue-100 text-blue-800";
      case "Technical":
        return "bg-purple-100 text-purple-800";
      case "Commercial":
        return "bg-green-100 text-green-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Question Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={getCategoryColor(question.category)}>{question.category}</Badge>
            <Badge className={getDifficultyColor(question.difficulty)}>{question.difficulty}</Badge>
            <span className="text-sm text-slate-500">Question {questionId} of {fullQuestionsData.length}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{question.question}</h1>
        </div>

        {/* Answer Tabs */}
        <Tabs defaultValue="guide" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guide" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Answer Guide
            </TabsTrigger>
            <TabsTrigger value="keypoints" className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Key Points
            </TabsTrigger>
            <TabsTrigger value="example" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Example Answer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Answer Guide</CardTitle>
                <CardDescription>Comprehensive guide to answering this question effectively</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                  {question.answerGuide}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keypoints">
            <Card>
              <CardHeader>
                <CardTitle>Key Points to Cover</CardTitle>
                <CardDescription>Essential elements to include in your answer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {question.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example">
            <Card>
              <CardHeader>
                <CardTitle>Example Answer</CardTitle>
                <CardDescription>
                  {question.exampleAnswer 
                    ? "A sample answer demonstrating how to apply the guidance" 
                    : "Use the answer guide and key points to craft your own response"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {question.exampleAnswer ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {question.exampleAnswer}
                    </p>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <p className="text-slate-600 italic">
                      Practice crafting your own answer using the answer guide and key points above. 
                      Personalize it with your own experiences from Boomi, VMware, and your multi-cloud background.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Topics */}
        {question.relatedTopics && question.relatedTopics.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Related Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {question.relatedTopics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
          {previousQuestion ? (
            <Link href={`/question/${previousQuestion.id}`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Question
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextQuestion ? (
            <Link href={`/question/${nextQuestion.id}`}>
              <Button>
                Next Question
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          ) : (
            <Link href="/">
              <Button>
                Back to Portfolio
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
