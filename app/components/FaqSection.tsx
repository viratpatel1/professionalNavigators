"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is Professional Navigators and how can you help me?',
    answer: 'Professional Navigators is your dedicated partner in preparing for professional courses. We provide mock tests, personalized study plans, daily targets, regular follow-ups, and expert doubt-solving to ensure you’re fully prepared to clear your exams.',
  },
  {
    question: 'What courses do you support?',
    answer: "We support students pursuing various professional courses such as CA, CS, CMA, and similar qualifications. If you're unsure whether we cater to your course, feel free to reach out and we’ll guide you.",
  },
  {
    question: 'How are the study plans customized for each student?',
    answer: 'Our study plans are designed after understanding your academic background, daily schedule, study pace, and goals. We tailor the plan to suit your routine while ensuring optimal coverage of the syllabus.',
  },
  {
    question: 'Are the mock tests similar to the actual exam pattern?',
    answer: 'Yes, our mock tests are structured to simulate real exam conditions and patterns. This helps reduce exam anxiety and gives you a clear idea of your preparation level.',
  },
  {
    question: 'What if I can’t follow the study plan every day due to my routine?',
    answer: 'That’s perfectly okay! We understand life gets busy. Our team conducts regular follow-ups and can adjust your plan if needed to keep you on track without stress.',
  },
  {
    question: 'What if I have doubts late at night or during odd hours?',
    answer: 'We aim to resolve your doubts as quickly as possible. While we may not be available 24/7, we prioritize timely doubt-solving and ensure your queries are addressed promptly during our working hours.',
  },
  {
    question: 'Do you guide students during the actual exam period?',
    answer: 'Absolutely! We provide strategic guidance, motivation, and personalized attention during the exam period to help you stay confident and composed.',
  },
  {
    question: 'What is the total cost of the program? Are there any hidden charges?',
    answer: "The program is priced in a way that gives you full value without any hidden charges. Instead of spending on expensive test series or random resources you may not even use, you get a complete, guided plan here that actually keeps you on track. Many students end up wasting more money jumping between things. With us, you invest once—and get full support till you clear. It's worth every bit.",
  },
  {
    question: "What if I don't clear my exam on the first attempt? Will I have to pay again?",
    answer: "Our primary goal is to help you clear the exam in one go. However, we understand that sometimes things don’t go as planned. If you’re unable to clear in one attempt or could only prepare for one group due to time constraints, we will extend our services at no extra cost until you clear your exam. We are with you until success!",
  },
  {
    question: "How do I enroll and start my preparation?",
    answer: "You can contact us via our website or social media handles to register. Once enrolled, our team will connect with you to begin the onboarding and personalized planning process.",
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">Frequently Asked Questions</h2>
          <h4 className="text-xl font-semibold mb-2 text-gray-700">Still Have Questions?</h4>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Get in touch with us—our team will be happy to assist you.
          </p>
          {/* <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition">
            Get In Touch
          </button> */}
          {/* <button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfNH28gAsmQC5RKNX1IaxI0-Aa1coZJy8JAcXhKJl0u6nP54Q/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300"
            >
             Get In Touch
            </a>
          </button> */}
        </div>

        {/* Right FAQ Accordion */}
        <div className="flex-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-black" />
                ) : (
                  <FaPlus className="text-black" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm transition-all">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};