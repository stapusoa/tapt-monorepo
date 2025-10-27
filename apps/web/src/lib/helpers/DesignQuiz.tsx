import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card-shad'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, RotateCcw, CheckCircle } from 'lucide-react'

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    points: {
      essential: number;
      professional: number;
      partnership: number;
    };
  }[];
}

interface QuizResult {
  tier: 'essential' | 'professional' | 'partnership';
  score: number;
  title: string;
  description: string;
  features: string[];
  nextSteps: string[];
}

export function DesignQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What stage is your project in?",
      options: [
        { 
          id: 'idea', 
          text: 'Just an idea - need everything designed from scratch',
          points: { essential: 1, professional: 2, partnership: 3 }
        },
        { 
          id: 'mvp', 
          text: 'Have an MVP, need to improve user experience',
          points: { essential: 2, professional: 3, partnership: 1 }
        },
        { 
          id: 'existing', 
          text: 'Existing product needing redesign',
          points: { essential: 1, professional: 3, partnership: 2 }
        },
        { 
          id: 'scaling', 
          text: 'Growing fast, need design systems and processes',
          points: { essential: 0, professional: 2, partnership: 3 }
        }
      ]
    },
    {
      id: 2,
      question: "What's your team size?",
      options: [
        { 
          id: 'solo', 
          text: 'Just me (founder/solo)',
          points: { essential: 3, professional: 1, partnership: 0 }
        },
        { 
          id: 'small', 
          text: '2-5 people',
          points: { essential: 2, professional: 3, partnership: 1 }
        },
        { 
          id: 'medium', 
          text: '6-20 people',
          points: { essential: 1, professional: 2, partnership: 3 }
        },
        { 
          id: 'large', 
          text: '20+ people',
          points: { essential: 0, professional: 1, partnership: 3 }
        }
      ]
    },
    {
      id: 3,
      question: "What's your timeline?",
      options: [
        { 
          id: 'asap', 
          text: 'ASAP - need it yesterday!',
          points: { essential: 3, professional: 2, partnership: 0 }
        },
        { 
          id: 'month', 
          text: 'Within a month',
          points: { essential: 3, professional: 2, partnership: 1 }
        },
        { 
          id: 'quarter', 
          text: '2-3 months',
          points: { essential: 1, professional: 3, partnership: 2 }
        },
        { 
          id: 'ongoing', 
          text: 'Ongoing partnership',
          points: { essential: 0, professional: 1, partnership: 3 }
        }
      ]
    },
    {
      id: 4,
      question: "How important is user research to you?",
      options: [
        { 
          id: 'basic', 
          text: 'Basic - I know my users pretty well',
          points: { essential: 3, professional: 1, partnership: 1 }
        },
        { 
          id: 'important', 
          text: 'Important - want some insights',
          points: { essential: 2, professional: 3, partnership: 2 }
        },
        { 
          id: 'critical', 
          text: 'Critical - need deep user understanding',
          points: { essential: 0, professional: 2, partnership: 3 }
        },
        { 
          id: 'continuous', 
          text: 'Want continuous user feedback',
          points: { essential: 0, professional: 1, partnership: 3 }
        }
      ]
    },
    {
      id: 5,
      question: "What's your budget range?",
      options: [
        { 
          id: 'tight', 
          text: 'Under $5,000 - keeping it lean',
          points: { essential: 3, professional: 0, partnership: 0 }
        },
        { 
          id: 'moderate', 
          text: '$5,000 - $15,000',
          points: { essential: 2, professional: 3, partnership: 1 }
        },
        { 
          id: 'flexible', 
          text: '$15,000 - $30,000',
          points: { essential: 1, professional: 2, partnership: 3 }
        },
        { 
          id: 'investment', 
          text: '$30,000+ - design is an investment',
          points: { essential: 0, professional: 1, partnership: 3 }
        }
      ]
    }
  ]

  const results: Record<string, QuizResult> = {
    essential: {
      tier: 'essential',
      score: 0,
      title: 'Essential Package is Perfect for You!',
      description: 'You need solid design fundamentals without the complexity. Perfect for getting your idea off the ground with professional quality.',
      features: [
        'Complete UX design for your project',
        'User research and personas',
        'High-fidelity designs and prototype',
        'Design handoff documentation'
      ],
      nextSteps: [
        'Book a discovery call to discuss your project',
        'Get a detailed project timeline',
        'Start with user research phase'
      ]
    },
    professional: {
      tier: 'professional',
      score: 0,
      title: 'Professional Hourly is Your Best Fit!',
      description: 'You need flexibility and deep expertise. Perfect for established projects that need strategic design thinking and advanced solutions.',
      features: [
        'Hourly flexibility for complex projects',
        'Advanced user research and testing',
        'Design system components',
        'Strategic design consultation'
      ],
      nextSteps: [
        'Schedule a strategy session',
        'Define project scope and timeline',
        'Set up weekly progress reviews'
      ]
    },
    partnership: {
      tier: 'partnership',
      score: 0,
      title: 'Design Partnership is What You Need!',
      description: 'You\'re ready for a long-term design partner. Perfect for growing companies that need ongoing design support and strategic thinking.',
      features: [
        'Dedicated design partnership',
        'Complete design system development',
        'Continuous user research and testing',
        'Team training and support'
      ],
      nextSteps: [
        'Book a partnership consultation',
        'Define long-term design strategy',
        'Plan design system roadmap'
      ]
    }
  }

  const calculateResult = () => {
    const scores = {
      essential: 0,
      professional: 0,
      partnership: 0
    }

    Object.entries(answers).forEach(([questionIndex, answerId]) => {
      const question = questions[parseInt(questionIndex)]
      const answer = question.options.find(opt => opt.id === answerId)
      if (answer) {
        scores.essential += answer.points.essential
        scores.professional += answer.points.professional
        scores.partnership += answer.points.partnership
      }
    })

    const maxScore = Math.max(scores.essential, scores.professional, scores.partnership)
    let winningTier: keyof typeof scores = 'essential'

    Object.entries(scores).forEach(([tier, score]) => {
      if (score === maxScore) {
        winningTier = tier as keyof typeof scores
      }
    })

    const finalResult = { ...results[winningTier], score: maxScore }
    setResult(finalResult)
    setShowResult(true)
  }

  const handleAnswer = (answerId: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answerId }))
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300)
    } else {
      setTimeout(() => calculateResult(), 300)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResult && result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-8 h-8" />
          </motion.div>
          
          <h2 className="mb-4">{result.title}</h2>
          <p className="text-muted-foreground mb-8">{result.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg mb-4">What's Included:</h3>
              <div className="space-y-2 text-left">
                {result.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Next Steps:</h3>
              <div className="space-y-2 text-left">
                {result.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-brand">
              Book Discovery Call
            </Button>
            <Button variant="outlined" onClick={resetQuiz}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3>Question {currentQuestion + 1} of {questions.length}</h3>
          <Badge variant="filled" color="secondary">{Math.round(progress)}% Complete</Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8">
            <h2 className="mb-8 text-center">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={option.id}
                  className="w-full p-4 text-left border rounded-lg hover:border-foreground transition-colors"
                  onClick={() => handleAnswer(option.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}