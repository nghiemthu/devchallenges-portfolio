import React, { FunctionComponent } from "react";
import styles from "./RecentFeedbacks.module.scss";
import moment from "moment";

const RecentFeedbacks: FunctionComponent<{ recentFeedbacks: any }> = ({
  recentFeedbacks,
}) => {
  return (
    <div className={styles.recentFeedbacks_panel}>
      <h3>Recent Feedbacks</h3>
      {recentFeedbacks?.map(
        ({ content, solution, submittedAt, parentId, id }: any) => (
          <div className={styles.recentFeedbacks_panel_card} key={id}>
            <div className={styles.recentFeedbacks_panel_card_time}>
              {moment(submittedAt).toNow()}
            </div>
            <div className={styles.recentFeedbacks_panel_card_feedback}>
              {content.length <= 150 ? content : `${content.slice(0, 150)}...`}
            </div>
            {solution && (
              <div className={styles.recentFeedbacks_panel_card_solution}>
                on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://devchallenges.io/solutions/${parentId}`}
                  className={styles.recentFeedbacks_panel_card_solution_title}
                >
                  {solution.title}
                </a>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default RecentFeedbacks;
