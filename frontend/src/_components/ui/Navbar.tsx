import styles from "@/_styles/ui/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.element}>
        <div className={styles.title}>
          <h1>Project Catalog</h1>
        </div>

       
       <div className={styles.links}>
        <span className={styles.link}>Sign Up</span>
        <span className={styles.link}>Sign In</span>
       </div>
       </div>
    </nav>
  );
};

export default Navbar;
