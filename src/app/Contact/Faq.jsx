"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables server-side rendering and static site generation for faster and SEO-friendly web applications.",
    },
    {
      question: "Why use Framer Motion?",
      answer:
        "Framer Motion is a library for animations in React, making it easy to create smooth and customizable animations.",
    },
    {
      question: "How to manage state in React?",
      answer:
        "State in React can be managed using hooks like useState or more advanced libraries like Redux or Zustand for global state management.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-card ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-header">
            <div className="faq-question">{faq.question}</div>
            <motion.div
              className="faq-arrow"
              animate={{ rotate: activeIndex === index ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ➤
            </motion.div>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <style jsx>{`
        .faq-container {
          width: 100%;
          padding: 1rem;
        }
        .faq-card {
          padding: 1rem;
          border-bottom: none;
          cursor: pointer;
          transition: border-color 0.3s;
          box-shadow: 0px 2px 4px -2px #0000001a;
          box-shadow: 0px 4px 6px -1px #0000001a;
          background: #ffffff;
          margin-bottom: 1rem;
        }
        .faq-card.active {
          border-bottom: 4px solid #0fb0c4;
        }
        .faq-card.active .faq-header {
          margin-bottom: 1rem;
        }
        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question {
          font-size: 1.1rem;
          font-weight: bold;
        }
        .faq-arrow {
          font-size: 1.2rem;
          color: #0070f3;
        }
        .faq-answer {
          padding: 1rem;
          background: #f9f9f9;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default FAQs;
