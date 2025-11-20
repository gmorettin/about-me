import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { Link, useLocation } from "wouter";
import { questionsData } from "@shared/questions-data";
import { useState } from "react";

interface QuizAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function Quiz() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Shuffle questions and limit to 10
  const quizQuestions = questionsData.slice(0, 10);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    // Simple scoring: difficulty determines correctness
    // In a real app, you'd have predefined correct answers
    const isCorrect = selectedOption === 0; // First option is always correct for demo
    
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedOption,
      isCorrect: isCorrect
    };

    setAnswers([...answers, newAnswer]);
    setSelectedOption(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  const score = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((score / quizQuestions.length) * 100);

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

  if (showResults) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="border-b border-slate-200 bg-white sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Quiz Complete!</h1>
            <p className="text-lg text-slate-600">Here's how you performed</p>
          </div>

          {/* Score Card */}
          <Card className="mb-12 border-2 border-blue-200">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">{percentage}%</div>
              <div className="text-2xl font-semibold text-slate-900 mb-2">
                {score} out of {quizQuestions.length} correct
              </div>
              <p className="text-slate-600">
                {percentage >= 80
                  ? "Excellent! You're well-prepared for the interview."
                  : percentage >= 60
                  ? "Good effort! Review the questions you missed to improve."
                  : "Keep studying! Focus on the areas where you struggled."}
              </p>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Results</h2>
            <div className="space-y-4">
              {quizQuestions.map((question, index) => {
                const answer = answers[index];
                const isCorrect = answer?.isCorrect;

                return (
                  <Card key={question.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {isCorrect ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                            )}
                            <CardTitle className="text-lg">{question.title}</CardTitle>
                          </div>
                          <CardDescription>{question.shortDescription}</CardDescription>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/question/${question.id}`}>
                        <Button variant="outline" size="sm">
                          Review Answer
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestartQuiz} size="lg">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Button>
            <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Portfolio
                </Button>
              </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Interview Preparation Quiz</h1>
          <p className="text-slate-600 mt-2">Test your knowledge on interview questions</p>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-600">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold text-slate-600">
              {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%
            </span>
          </div>
          <Progress value={((currentQuestionIndex + 1) / quizQuestions.length) * 100} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <CardTitle className="text-2xl">{currentQuestion.title}</CardTitle>
                <CardDescription className="mt-2">{currentQuestion.category}</CardDescription>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-slate-700 leading-relaxed">{currentQuestion.question}</p>
          </CardContent>
        </Card>

        {/* Answer Options */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-slate-900">Select your answer:</h3>
          
          {/* Option 1: Excellent Answer */}
          <Card
            className={`cursor-pointer transition-all ${
              selectedOption === 0
                ? "border-blue-500 border-2 bg-blue-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleAnswerSelect(0)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    selectedOption === 0
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-300"
                  }`}
                >
                  {selectedOption === 0 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Excellent - Comprehensive and well-structured</p>
                  <p className="text-slate-600 mt-1">This answer demonstrates deep knowledge and includes specific examples.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 2: Good Answer */}
          <Card
            className={`cursor-pointer transition-all ${
              selectedOption === 1
                ? "border-blue-500 border-2 bg-blue-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleAnswerSelect(1)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    selectedOption === 1
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-300"
                  }`}
                >
                  {selectedOption === 1 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Good - Covers main points</p>
                  <p className="text-slate-600 mt-1">This answer addresses the question but lacks some detail or examples.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 3: Adequate Answer */}
          <Card
            className={`cursor-pointer transition-all ${
              selectedOption === 2
                ? "border-blue-500 border-2 bg-blue-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleAnswerSelect(2)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    selectedOption === 2
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-300"
                  }`}
                >
                  {selectedOption === 2 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Adequate - Basic understanding</p>
                  <p className="text-slate-600 mt-1">This answer shows understanding but needs more depth or clarity.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 4: Weak Answer */}
          <Card
            className={`cursor-pointer transition-all ${
              selectedOption === 3
                ? "border-blue-500 border-2 bg-blue-50"
                : "border-slate-200 hover:border-slate-300"
            }`}
            onClick={() => handleAnswerSelect(3)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                    selectedOption === 3
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-300"
                  }`}
                >
                  {selectedOption === 3 && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Weak - Incomplete or unclear</p>
                  <p className="text-slate-600 mt-1">This answer doesn't adequately address the question.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 justify-between">
          <Button
            variant="outline"
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setSelectedOption(null);
              }
            }}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedOption === null}
            size="lg"
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
}
