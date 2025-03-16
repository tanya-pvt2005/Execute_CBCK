import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../FAQ/faq.css"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "What is the User Dashboard?",
      answer: "The User Dashboard allows users to give feedback, send messages to businesses, access insights from data, and engage in gamified feedback mechanisms."
    },
    {
      question: "How does the Business Dashboard help companies?",
      answer: "The Business Dashboard enables businesses to receive feedback, gain statistical insights from user data, communicate with users, and access an exclusive chatbot."
    },
    {
      question: "What features are included in the Community Interface?",
      answer: "The Community Interface includes fake review detection, thread replies, anonymous feedback, Reddit-like tags, and a safe space for brand-consumer connectivity."
    },
    {
      question: "Is feedback gamified?",
      answer: "Yes! Users can participate in a gamified feedback system where they earn rewards in return for their insights."
    },
    {
      question: "Can businesses reply to user queries?",
      answer: "Yes, businesses can reply to user queries through the platform, fostering better brand-consumer interactions."
    },
    {
      question: "Does the platform support chatbot interactions?",
      answer: "Yes! Both users and businesses have access to chatbot functionalities to enhance their experience and engagement."
    }
];


  return (
    <div className="faq">
      <div className="faq-head">Frequently <span>Asked</span> Questions</div>
      <div className="faqs">
        {faqsData.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? "active" : ""}`} 
            key={index} 
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
