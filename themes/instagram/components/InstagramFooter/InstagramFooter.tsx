import React from "react";
import styles from "./InstagramFooter.module.scss";
import LogoSmall from "icons/LogoSmall";
import Socials from "components/Socials/Socials";

const InstagramFooter = ({ user }) => {
  return (
    <footer className={styles.instagramFooter}>
      <Socials user={user} />

      <div className={styles.instagramFooter_logo}>
        <LogoSmall />
      </div>
    </footer>
  );
};

export default InstagramFooter;
