import styles from "./HorizontalLayout.module.scss";

const HorizontalLayout = ({ sideNavigation, children }) => {
  return (
    <div className={styles.horizontalLayout}>
      <div className={styles.horizontalLayout_sideNavigation}>
        {sideNavigation}
      </div>

      <div className={styles.horizontalLayout_contentWrapper}>
        <div className={styles.horizontalLayout_children}>{children}</div>
      </div>
    </div>
  );
};

export default HorizontalLayout;
