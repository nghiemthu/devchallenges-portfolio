import React, { FunctionComponent } from "react";
import styles from "./InstagramTabs.module.scss";
import cn from "classnames";

type Tab = {
  label: string;
  Icon: any;
  value: string;
};

const InstagramTabs: FunctionComponent<{
  tabs: Tab[];
  onTabSelected: (value: any) => void;
  currentTabValue: string;
}> = ({ tabs, onTabSelected, currentTabValue }) => {
  return (
    <ul className={styles.instagramTabs}>
      {tabs.map(({ label, Icon, value }) => (
        <li key={value}>
          <button
            aria-label={label}
            onClick={() => onTabSelected(value)}
            className={cn(styles.instagramTabs_tab, {
              [styles.instagramTabs_tab__active]: currentTabValue === value,
            })}
          >
            <div className={styles.instagramTabs_label}>
              <div>
                <Icon fontSize="inherit" />
              </div>
              <div className={styles.instagramTabs_label_text}>{label}</div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default InstagramTabs;
