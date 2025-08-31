import Link from "next/link";
import styles from "@/_styles/ui/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.element}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Project Manager</p>
        
        <div className={styles.links}>
          <Link href="/product">
            <span className={styles.link}>Products</span>
          </Link>
          <Link href="/contact" >
            <span className={styles.link}>Contact</span>
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
