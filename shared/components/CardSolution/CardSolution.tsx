import React, { FunctionComponent, useContext } from "react";
import styles from "./CardSolution.module.scss";

import Grid from "@material-ui/core/Grid";

import Tags from "../Tags/Tags";
import Button from "../Buttons/Button";
import LevelIndicator from "../LevelIndicator/LevelIndicator";

import { FavoriteRounded, ChatRounded } from "@material-ui/icons";
import cn from "classnames";

const CardSolution: FunctionComponent<{
  solution: any;
  showFeedBackButton?: boolean;
}> = ({ solution, showFeedBackButton = false }) => {
  const solutionPath = `/solutions/${solution.id}`;

  return (
    <a href={solutionPath} className={styles.cardSolution}>
      <div className={styles.cardSolution_topSection}>
        <h3 className={styles.cardSolution_title}>{solution.title}</h3>
      </div>

      <div className={styles.cardSolution_space}>
        {solution.feedbackRequest && (
          <div className={styles.cardSolution_helpRequest}>
            <div
              onClick={() => {}}
              className={styles.cardSolution_helpRequest_message}
              style={{
                marginBottom:
                  solution.feedbacks?.length <= 0 ? "var(--space-md)" : 0,
              }}
            >
              {solution.feedbackRequest}
            </div>

            {solution.feedbacks?.length <= 0 && (
              <div
                className={cn(
                  styles.cardSolution_helpRequest_label,
                  styles.cardSolution_helpRequest_firstOne
                )}
              >
                No one reviewed this solution. Be the first one
              </div>
            )}
          </div>
        )}
      </div>

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

          <CardUser user={solution.user} />
        </div>
      )}

      {/* {challenge && (
        <div className={styles.cardSolution_challenge}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={7}>
              <h6>{challenge?.name}</h6>
              <div className={styles.cardSolution_challenge_tagsWrapper}>
                <Tags tags={challenge?.tags} />
              </div>

              <LevelIndicator levelIndex={challenge.level} />
            </Grid>

            <Grid item xs={5}>
              <div className={styles.cardSolution_challenge_imgWrapper}>
                <img
                  loading="lazy"
                  src={challenge?.thumbnailImage}
                  alt={challenge?.name}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      )} */}

      {showFeedBackButton && (
        <div className={styles.cardSolution_buttonRow}>
          <Button
            onClick={() => history.push(`${solutionPath}`)}
            aria-label="Give Feedback"
          >
            Give Feedback
          </Button>
        </div>
      )}
    </a>
  );
};

export default CardSolution;
