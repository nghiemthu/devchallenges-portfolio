import React, { FunctionComponent } from "react";
import styles from "./Skills.module.scss";
import Skill from "components/Skills/Skill/Skill";
import Grid from "@material-ui/core/Grid";

const Skills: FunctionComponent<{ skills: any }> = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills_heading}>
        <h3>Skills and Endorsements</h3>
      </div>

      <div className={styles.skills_content}>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} md={6} key={skill.id}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
