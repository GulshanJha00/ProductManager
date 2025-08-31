"use client"
import styles from "@/_styles/ui/navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.element}>
        <div className={styles.title}>
          <h1>Project Catalog</h1>
        </div>
       <div className={styles.links}>
        <Link href={"/product"}><span className={styles.link}>Products</span></Link>
        <Link href={"/contact"}><span className={styles.link}>Contact Me</span></Link>
       </div>
       </div>
    </nav>
  );
};

export default Navbar;
