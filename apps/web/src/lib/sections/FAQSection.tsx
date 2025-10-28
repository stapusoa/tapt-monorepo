import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What types of projects do you work on?",
      answer: "I work on a variety of UX projects including mobile apps, web applications, enterprise software, and design systems. I particularly enjoy projects that involve user research, complex information architecture, and cross-platform design challenges."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope, but typically range from 4-12 weeks for most UX design projects. I always start with a discovery phase to understand requirements and provide a detailed timeline estimate."
    },
    {
      question: "Do you work with remote teams?",
      answer: "Absolutely! I have extensive experience working with distributed teams across different time zones. I use collaborative tools like Figma, Miro, and Slack to ensure smooth communication and project delivery."
    },
    {
      question: "What is your design process?",
      answer: "My process typically includes: Discovery & Research → Information Architecture → Wireframing → Visual Design → Prototyping → Testing & Iteration. However, I adapt my approach based on project needs and constraints."
    },
  ]

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="text-center mb-16 typography">
              <h2 className="title-lg text-[#1a1a1a] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="body-lg text-[#606060] max-w-2xl mx-auto">
                Get answers to common product development questions
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-[#1a1a1a] text-left hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#606060] leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}