import Image from "next/image";

export function HowToApply() {
  const steps = [
    {
      title: "Step 1: Understand the Eligibility Criteria",
      description: "Before applying, it’s important to understand the eligibility criteria set by Akhuwat. The foundation typically offers loans to:",
      points: [
        "Individuals looking to start or expand a small business.",
        "People in need of financial assistance for education, healthcare, or improving living conditions.",
        "Applicants must show they need the loan and have a good plan to use it.",
      ],
      extra: "Akhuwat gives priority to people who are poor and may not have a bank account. Knowing this will help you check if you qualify and get ready to apply.",
    },
    {
      title: "Step 2: Prepare Your Documentation",
      description: "Akhuwat makes it easier for you to get a loan. You will need some documents for your loan application. This may include:",
      points: [
        "A valid form of identification (such as a National ID card).",
        "Proof of residence or business location.",
        "A detailed business plan or description of how the loan will be used, demonstrating its viability and potential impact on your economic situation.",
      ],
      extra: "Make sure your documents are up-to-date and correct to prevent any delays in your application.",
    },
    {
      title: "Step 3: Visit an Akhuwat Branch or Contact Point",
      description: "Find the closest Akhuwat branch or contact point in your area. Akhuwat has many offices in Pakistan, working with local mosques, churches, and community centers. Visiting in person lets you get information, ask questions, and learn about the foundation’s values.",
      points: [],
    },
    {
        title: "Step 4: Attend an Orientation Session",
        description: "Akhuwat regularly holds sessions for people interested in applying for loans. These sessions give information about the loan process, repayment terms, and success stories of past recipients. Going to a session is a great chance to learn about the foundation’s mission and how it can help with your financial needs and goals.",
        points: []
    },
    {
        title: "Step 5: Submit Your Loan Application",
        description: "Once you have all the required information and documents, you can submit your loan application. Akhuwat staff will help you with the process to make sure your paperwork is complete and accurately shows your needs and ability to repay.",
        points: []
    },
    {
        title: "Step 6: Participate in the Community Verification Process",
        description: "Akhuwat involves the community in verifying loan applications. They may visit your home or business and talk to community members to confirm your need and ability for the loan. This shows the foundation’s focus on community support and shared responsibility.",
        points: []
    },
    {
        title: "Step 7: Loan Approval and Disbursement",
        description: "After your loan application is verified, it will be reviewed for approval. If approved, you will receive the loan in a group setting, highlighting the community’s support for everyone’s success.",
        points: []
    },
    {
        title: "Step 8: Repayments",
        description: "Akhuwat provides a clear repayment schedule and usually don’t have interest. When you pay back your loan, you not only fulfill your commitment but also help support other people in need through a revolving fund.",
        points: []
    }
  ];

  return (
    <section className="py-20 px-[9%] bg-white">
      <div className="container mx-auto space-y-12">
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
          <h2 className="text-3xl font-bold font-headline text-foreground mb-4">How to Apply this Loan?</h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Applying for an Akhuwat loan is easy and inclusive. The process is designed to help people in Pakistan by reducing poverty and empowering individuals. If you want to apply for a loan to start a business, grow one, or meet personal financial needs, here is a simple guide to help you through the application process.
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              <h3 className="text-2xl font-bold font-headline text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground mb-2">{step.description}</p>
              {step.points.length > 0 && (
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              {step.extra && <p className="text-muted-foreground">{step.extra}</p>}
            </div>
          ))}
        </div>
        <div className="text-left mt-8">
            <p className="text-lg text-muted-foreground max-w-5xl">
                Applying for an Akhuwat loan is not just about money. It’s a way to join a community that helps and supports each other. By following these steps and getting involved, applicants can get the help they need to create a better future.
            </p>
        </div>
      </div>
    </section>
  );
}
