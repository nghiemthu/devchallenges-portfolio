import styles from "./HorizontalLayout.module.scss";

const HorizontalLayout = ({
  profile: { picture, name, bio, username },
  children,
}) => {
  return (
    <div className={styles.horizontalLayout}>
      <div className={styles.horizontalLayout_sideNavigation}>
        <img
          src={picture}
          alt={name}
          className={styles.horizontalLayout_sideNavigation_profileImage}
        />
        <h1 className={styles.horizontalLayout_sideNavigation_name}>{name}</h1>
        <h6 className={styles.horizontalLayout_sideNavigation_username}>
          {username}
        </h6>

        <p className={styles.horizontalLayout_sideNavigation_bio}>{bio}</p>
      </div>

      <div className={styles.horizontalLayout_contentWrapper}>
        <div className={styles.horizontalLayout_children}>{children}</div>
      </div>
    </div>
  );
};

export default HorizontalLayout;
