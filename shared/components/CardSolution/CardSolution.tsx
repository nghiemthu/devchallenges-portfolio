import React, { FunctionComponent, useContext } from "react";
import styles from "./CardSolution.module.scss";

import Grid from "@material-ui/core/Grid";

import { FavoriteRounded, ChatRounded } from "@material-ui/icons";
import LevelIndicator from "components/LevelIndicator/LevelIndicator";
import Tags from "components/Tags/Tags";

const CardSolution: FunctionComponent<{
  solution: any;
}> = ({ solution }) => {
  const solutionPath = `https://devchallenges.io/solutions/${solution.id}`;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={solutionPath}
      className={styles.cardSolution}
    >
      <div className={styles.cardSolution_topSection}>
        <h4 className={styles.cardSolution_title}>{solution.title}</h4>
      </div>

      <div className={styles.cardSolution_space}></div>

      {solution.user && (
        <div className={styles.cardSolution_userWrapper}>
          <div className={styles.cardSolution_likeButton}>
            <FavoriteRounded fontSize="inherit" />
            <p>{solution.likes?.length || 0}</p>
          </div>

          <div className={styles.cardSolution_likeButton}>
            <ChatRounded fontSize="inherit" />
            <p>{solution.feedbacks?.length || 0}</p>
          </div>
        </div>
      )}

      <div className={styles.cardSolution_userWrapper}>
        <div className={styles.cardSolution_likeButton}>
          <FavoriteRounded fontSize="inherit" />
          <p>{solution.likes?.length || 0}</p>
        </div>

        <div className={styles.cardSolution_feedback}>
          <ChatRounded fontSize="inherit" />
          <p>{solution.feedbacks?.length || 0}</p>
        </div>
      </div>

      {solution.challenge && (
        <div className={styles.cardSolution_challenge}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={7}>
              <h6>{solution.challenge?.name}</h6>
              <div className={styles.cardSolution_challenge_tagsWrapper}>
                <Tags tags={solution.challenge?.tags} />
              </div>

              <LevelIndicator levelIndex={solution.challenge.level} />
            </Grid>

            <Grid item xs={5}>
              <div className={styles.cardSolution_challenge_imgWrapper}>
                <img
                  loading="lazy"
                  src={solution.challenge?.thumbnailImage}
                  alt={solution.challenge?.name}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </a>
  );
};

export default CardSolution;
