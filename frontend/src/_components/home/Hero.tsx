"use client"
import styles from "@/_styles/home/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Product Catalog</h1>
        <p className={`${styles.subtitle}`}>
  See all available products, stay up-to-date, and <span>enjoy a seamless experience.</span> 
</p>

        <div className={styles.actions}>
          <button onClick={()=>window.location.href = "/product"} className={styles.primary}>View Product</button>
          <button onClick={()=>window.location.href = "/manage"} className={styles.primary}>Manage Products(CMS)</button>
          <button onClick={()=>window.location.href = "/login"} className={styles.secondary}>Login as Admin</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;