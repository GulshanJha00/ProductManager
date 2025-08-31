"use client"
import { useState } from "react";
import styles from "@/_styles/home/faq.module.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I view live products?",
      answer: "Simply go to the 'Live' page to see all products with status 'Published'.",
    },
    {
      question: "Can I create or edit products?",
      answer: "Only admins/project managers can create, update, or delete products.",
    },
    {
      question: "How often is the product list updated?",
      answer: "The product list updates in real-time whenever an admin publishes or edits a product.",
    },
    {
      question: "Is there a mobile-friendly interface?",
      answer: "Yes! The website is fully responsive and works smoothly on all devices.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Frequently <span>Asked Questions</span>
        </h2>

        <div className={styles.items}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.item} onClick={() => toggleFAQ(idx)}>
              <div className={styles.question}>
                {faq.question}
                <span className={styles.toggle}>{openIndex === idx ? "-" : "+"}</span>
              </div>
              {openIndex === idx && <p className={styles.answer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
