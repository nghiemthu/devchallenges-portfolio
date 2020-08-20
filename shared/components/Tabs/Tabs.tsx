import React, { FunctionComponent } from "react";
import styles from "./Tabs.module.scss";
import cn from "classnames";

type Tab = {
  label: string;
  Icon: any;
  value: string;
};

const Tabs: FunctionComponent<{
  tabs: Tab[];
  onTabSelected: (value: any) => void;
  currentTabValue: string;
}> = ({ tabs, onTabSelected, currentTabValue }) => {
  return (
    <ul className={styles.tabs}>
      {tabs.map(({ label, Icon, value }) => (
        <li key={value}>
          <button
            aria-label={label}
            onClick={() => onTabSelected(value)}
            className={cn(styles.tabs_tab, {
              [styles.tabs_tab__active]: currentTabValue === value,
            })}
          >
            <div className={styles.tabs_label}>
              <Icon fontSize="inherit" />
              <div className={styles.tabs_label_text}>{label}</div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
