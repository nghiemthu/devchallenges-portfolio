import React, { FunctionComponent } from "react";
import styles from "./LevelIndicator.module.scss";
import cn from "classnames";
import { ProficientLevel, proficientLevels } from "types/level";

const LevelIndicator: FunctionComponent<{ levelIndex: number }> = ({
  levelIndex,
}) => {
  const level = proficientLevels[levelIndex];

  return (
    <>
      <div className={styles.levelIndicator_level}>{level}</div>

      <div className={styles.levelIndicator}>
        {[0, 1, 2, 3, 4, 5].map((number) =>
          number <= levelIndex ? (
            <div
              key={number}
              className={cn(styles.levelIndicator_bar, {
                [styles.levelIndicator_bar__purple]:
                  level === ProficientLevel.beginner,
                [styles.levelIndicator_bar__blue]:
                  level === ProficientLevel.elementary,
                [styles.levelIndicator_bar__green]:
                  level === ProficientLevel.intermediate,
                [styles.levelIndicator_bar__yellow]:
                  level === ProficientLevel.upperIntermediate,
                [styles.levelIndicator_bar__primaryColor]:
                  level === ProficientLevel.advanced,
                [styles.levelIndicator_bar__red]:
                  level === ProficientLevel.proficient,
              })}
            />
          ) : (
            <div key={number} className={styles.levelIndicator_bar} />
          )
        )}
      </div>
    </>
  );
};

export default LevelIndicator;
