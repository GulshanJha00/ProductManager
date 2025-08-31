import Link from "next/link";
import styles from "@/_styles/ui/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.element}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Project Manager</p>
        
        <div className={styles.links}>
          <Link href="/about" legacyBehavior>
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.link}>Contact</a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a className={styles.link}>Privacy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
