"use client";
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is the duration of your CA Foundation, Intermediate, and Final courses?',
    answer: 'The duration varies: Foundation (4-5 months), Intermediate (6-8 months), Final (8-10 months).',
  },
  {
    question: 'Do you provide study materials?',
    answer: 'Yes, we provide comprehensive study material and notes.',
  },
  {
    question: 'What is the passing percentage of students in the CA exams?',
    answer: 'Our students consistently outperform national averages in all levels of CA exams.',
  },
  {
    question: 'Do you provide mock tests and practice papers?',
    answer: 'Yes! We regularly conduct mock tests and provide practice papers.',
  },
  {
    question: 'How do you handle doubt clearing sessions?',
    answer: 'We have scheduled doubt-clearing sessions with faculty after every topic.',
  },
  {
    question: 'How to Enroll?',
    answer: 'You can enroll via our website or by contacting our team directly.',
  },
  {
    question: 'Can I avail a demo class?',
    answer: 'Yes, we offer demo classes for interested students before enrollment.',
  },
];

export default function FaqSection () {
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
          <button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfNH28gAsmQC5RKNX1IaxI0-Aa1coZJy8JAcXhKJl0u6nP54Q/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300"
            >
             Get In Touch
            </a>
          </button>
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
