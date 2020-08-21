import React, { FunctionComponent } from "react";
import styles from "./Tags.module.scss";

const Tags: FunctionComponent<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tags_tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
