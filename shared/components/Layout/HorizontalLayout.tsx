import styles from "./HorizontalLayout.module.scss";
import Logo from "icons/Logo";
import LogoSmall from "icons/LogoSmall";
import cn from "classnames";
import { CloseRounded } from "@material-ui/icons";

const HorizontalLayout = ({
  sideNavigation,
  children,
  openOnMobile = false,
  sideNavigationMobile,
  close = () => {},
}) => {
  return (
    <div className={styles.horizontalLayout}>
      {openOnMobile && (
        <button className={styles.horizontalLayout_closeButton} onClick={close}>
          <CloseRounded color="inherit" fontSize="inherit" />
        </button>
      )}

      <div
        className={cn(styles.horizontalLayout_sideNavigation, {
          [styles.horizontalLayout_sideNavigation__openOnMobile]: openOnMobile,
        })}
      >
        <div>{sideNavigation}</div>

        <Logo />
      </div>

      <div className={styles.horizontalLayout_sideNavigation__mobile}>
        {sideNavigationMobile && <div>{sideNavigationMobile}</div>}

        <LogoSmall />
      </div>

      <div className={styles.horizontalLayout_contentWrapper}>
        <div className={styles.horizontalLayout_children}>{children}</div>
      </div>
    </div>
  );
};

export default HorizontalLayout;
