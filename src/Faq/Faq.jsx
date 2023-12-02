// Faq.js
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [showAnswers, setShowAnswers] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleAnswer = (id) => {
    setShowAnswers({
      ...showAnswers,
      [id]: !showAnswers[id],
    });
  };

  const faqData = [
    {
      id: 1,
      question: 'What is Manage Wise and what does it offer?',
      answer:
        'Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.',
    },
    // Add other FAQ items similarly
    {
      id: 2,
      question: 'Is Manage Wise suitable for small businesses and larger enterprises alike?',
      answer:
        'Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.',
    },
    {
      id: 3,
      question: 'Can I access Manage Wise from different devices and platforms?',
      answer:
        'Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.',
    },
    {
      id: 4,
      question: 'What kind of support options do you offer to users? ',
      answer:
        'we provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise. ',
    },
    {
      id: 5,
      question: 'How secure is the data stored within Manage Wise?',
      answer:
        "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and ensure protected",
    },
  ];

  return (
    <div id='Faq' className='Faq'>
      <h2 className="faqHeading">🙋‍♀️FAQ</h2>
      <h1 className='faq1'>Need Answers?</h1>
      <p className='faq2'>Check out our most commonly asked questions below to find the information you need.</p>
      <div className="faqContent">
        {faqData.map((faq) => (
          <div key={faq.id} className="questionBox" onClick={() => toggleAnswer(faq.id)}>
            <div className="question">
              {faq.question}
              <span className={showAnswers[faq.id] ? 'plusMinusIcon minus' : 'plusMinusIcon plus'}>
                {showAnswers[faq.id] ? '-' : '+'}
              </span>
            </div>
            <div className={showAnswers[faq.id] ? 'answer visible' : 'answer'}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
