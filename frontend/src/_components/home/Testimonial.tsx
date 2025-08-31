"use client"
import styles from "@/_styles/home/testimonial.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Enthusiast",
      message: "This product catalog makes discovering and tracking products effortless!",
    },
    {
      name: "Michael Smith",
      role: "Small Business Owner",
      message: "I love how easy it is to see live updates of all products.",
    },
    {
      name: "Sofia Lee",
      role: "Shopper",
      message: "The interface is clean, intuitive, and super responsive.",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          What Our <span>Users</span> Say
        </h2>

        <div className={styles.cards}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <p className={styles.message}>&quot;{t.message}&quot;</p>
              <h3 className={styles.name}>{t.name}</h3>
              <span className={styles.role}>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
