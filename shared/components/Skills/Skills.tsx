import React, { FunctionComponent } from "react";
import styles from "./Skills.module.scss";
import Skill from "components/Skills/Skill/Skill";
import Grid from "@material-ui/core/Grid";

const Skills: FunctionComponent<{ skills: any }> = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills_heading}>
        <h4>Skills and Endorsements</h4>
      </div>

      <div className={styles.skills_content}>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
