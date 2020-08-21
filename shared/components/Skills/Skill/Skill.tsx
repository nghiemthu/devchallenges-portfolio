import React, { FunctionComponent } from "react";
import styles from "./Skill.module.scss";

const Skill: FunctionComponent<{ skill: any }> = ({ skill }) => {
  return (
    <button className={styles.skill}>
      <div className={styles.skill_name}>{skill.name}</div>
      {skill.endorsements.length > 0 && (
        <>
          ·
          <div className={styles.skill_endorsementsButton}>
            {skill.endorsements.length} endorsements
          </div>
        </>
      )}
    </button>
  );
};

export default Skill;
