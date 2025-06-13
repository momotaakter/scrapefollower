// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How does your lead generation work?",
    answer:
      "We use smart scraping and filtering systems to find and verify leads, ensuring you get only the most relevant client data.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No! Our platform is designed to be user-friendly, even if you’re not tech-savvy.",
  },
  {
    question: "Can I export leads to my CRM?",
    answer:
      "Absolutely! We support CSV export and direct integration with tools like HubSpot, Salesforce, and more.",
  },
  {
    question: "Is the data updated regularly?",
    answer:
      "Yes, all lead data is refreshed and validated in real-time to keep your lists clean and effective.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 7-day free trial so you can explore all features before committing.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Of course! You have full control over your subscription and can cancel at any time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 bg-white pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-4 md:p-5 text-left"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-4 md:px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
