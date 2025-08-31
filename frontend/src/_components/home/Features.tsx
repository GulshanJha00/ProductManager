"use client"
import styles from "@/_styles/home/features.module.css";

const Features = () => {
  const featureList = [
    { title: "Browse Products", desc: "See all available products instantly." },
    { title: "Real-Time Updates", desc: "Stay up-to-date with live changes." },
    { title: "Seamless Experience", desc: "Intuitive and easy-to-use interface." },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Why <span>Our Product Catalog</span> Stands Out
        </h2>

        <div className={styles.cards}>
          {featureList.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
