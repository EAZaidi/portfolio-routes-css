import Link from 'next/link';
import React from 'react';
import { LuMenu } from "react-icons/lu";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarFlex}>
        <div className={styles.navbarText}>
        </div>
        
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarLink}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link href={"/about"}>About Me</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link href={"/projects"}>My Projects</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link href={"/contact"}>Contact Me</Link>
          </li>
        </ul>

        <LuMenu className={styles.hamburgerIcon} size={30} />
      </div>
    </div>
  );
};

export default Navbar;
