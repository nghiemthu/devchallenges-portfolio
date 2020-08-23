import React from "react";
import styles from "./Footer.module.scss";
import Logo from "icons/Logo";
import { Paths } from "types/paths";
import LogoSmall from "icons/LogoSmall";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <a
          href={`https://devchallenges.io/${Paths.challenges}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Challenges
        </a>
        <a
          href={`https://devchallenges.io/${Paths.solutions}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solutions
        </a>
        <a
          href={`https://devchallenges.io/${Paths.paths}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Paths
        </a>
        <a href={Paths.blogs} target="_blank" rel="noopener noreferrer">
          News
        </a>
      </div>

      <div className={styles.footer_logo}>
        <LogoSmall />
      </div>
    </footer>
  );
};

export default Footer;
