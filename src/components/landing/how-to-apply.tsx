import Image from "next/image";
import {
  ClipboardCheck,
  FileText,
  Building,
  Users,
  Send,
  UserCheck,
  CheckCircle,
  Banknote,
} from "lucide-react";

export function HowToApply() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      title: "Step 1: Eligibility Criteria",
      description: "Understand the criteria. Akhuwat typically offers loans to:",
      points: [
        "Individuals for starting or expanding a small business.",
        "People needing financial assistance for education, healthcare, or improving living conditions.",
        "Applicants must show need and a viable plan.",
      ],
      extra: "Priority is given to the poor and unbanked. This helps you check if you qualify.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Step 2: Prepare Documentation",
      description: "Gather necessary documents for your application. This may include:",
      points: [
        "A valid form of identification (e.g., National ID card).",
        "Proof of residence or business location.",
        "A detailed business plan or description of loan use.",
      ],
      extra: "Ensure your documents are up-to-date to prevent any delays.",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Step 3: Visit an Akhuwat Branch",
      description: "Find the closest Akhuwat branch or contact point. Akhuwat has many offices, often working with local community centers. Visiting in person lets you get direct information and ask questions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Step 4: Attend an Orientation",
      description: "Akhuwat holds regular sessions for applicants. These cover the loan process, terms, and success stories. Attending is a great chance to learn about the foundation’s mission.",
    },
    {
      icon: <Send className="h-8 w-8 text-primary" />,
      title: "Step 5: Submit Your Application",
      description: "Once you have all required information and documents, you can submit your loan application. Akhuwat staff will assist you to ensure your paperwork is complete and accurate.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Step 6: Community Verification",
      description: "Akhuwat involves the community in verifying applications. They may visit your home or business and talk to community members to confirm your need and credibility.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Step 7: Loan Approval",
      description: "After verification, your application is reviewed for approval. If approved, you will receive the loan in a group setting, highlighting community support.",
    },
    {
      icon: <Banknote className="h-8 w-8 text-primary" />,
      title: "Step 8: Repayments",
      description: "Akhuwat provides a clear, interest-free repayment schedule. When you repay your loan, you contribute to a revolving fund that helps support others in need.",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-white">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto mb-8" dir="rtl">
            برائے مہربانی نوٹ فرمائیں کہ اخوت لون درخواست فارم آن لائن دستیاب نہیں ہے۔
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="/table.png"
              alt="Akhuwat Loan Schedule"
              width={1200}
              height={585}
              className="w-full h-auto object-contain"
              data-ai-hint="loan schedule table"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4">How to Apply for this Loan?</h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Applying for an Akhuwat loan is a straightforward and inclusive process designed to empower individuals across Pakistan. Here is a simple, step-by-step guide to help you navigate the application journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>

          <div className="relative flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                {/* Step Content */}
                <div
                  className={`w-[calc(50%-2rem)] flex ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`w-full max-w-md p-6 bg-secondary/30 rounded-lg shadow-lg border-l-4 border-primary transition-transform duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                    >
                      {step.icon}
                      <h3 className="text-xl font-bold font-headline text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      {step.description}
                    </p>
                    {step.points && step.points.length > 0 && (
                      <ul
                        className={`list-disc list-outside text-muted-foreground space-y-1 mt-2 ${
                          index % 2 === 0 ? "pr-5" : "pl-5"
                        }`}
                      >
                        {step.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {step.extra && (
                      <p className="text-xs text-muted-foreground/80 mt-3">
                        {step.extra}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline Circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-[calc(50%+2rem)]"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Applying for an Akhuwat loan is more than a financial transaction; it's about joining a compassionate community built on mutual support. By following these steps, you can access the resources needed to build a better future.
          </p>
        </div>
      </div>
    </section>
  );
}
