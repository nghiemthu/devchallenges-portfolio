import React from "react";
import styles from "./InstagramHeader.module.scss";
import Logo from "icons/Logo";

const InstagramHeader = ({ user }) => {
  return (
    <div className={styles.instagramHeader}>
      <Logo />

      <a
        className={styles.instagramHeader_myProfile}
        href={`https://devchallenges.io/profile/${user.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        My profile
      </a>
    </div>
  );
};

export default InstagramHeader;
