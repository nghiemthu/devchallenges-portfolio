import React, { FunctionComponent } from "react";
import groupBy from "lodash/groupBy";

import styles from "./BadgeSmallSummary.module.scss";
import Bronze from "icons/Bronze";
import Silver from "icons/Silver";
import Diamond from "icons/Diamond";
import Gold from "icons/Gold";
import Penalty from "icons/Penalty";
import PenaltyTwo from "icons/PenaltyTwo";

const groupBadge = (badges: any) => {
  return groupBy(badges, "type");
};

const BadgeSmallSummary: FunctionComponent<{
  badges: any;
}> = ({ badges }) => {
  return (
    <div className={styles.badgeSmallSummary}>
      {groupBadge(badges)["bronze"] && groupBadge(badges)["bronze"].length > 0 && (
        <div className={styles.badgeSmallSummary_badgeWrapper}>
          <Bronze />

          {groupBadge(badges)["bronze"].length > 0 && (
            <span className={styles.badgeSmallSummary_badgeWrapper_number}>
              {groupBadge(badges)["bronze"].length}
            </span>
          )}
        </div>
      )}

      {groupBadge(badges)["silver"] && groupBadge(badges)["silver"].length > 0 && (
        <div className={styles.badgeSmallSummary_badgeWrapper}>
          <Silver />

          {groupBadge(badges)["silver"].length > 0 && (
            <span className={styles.badgeSmallSummary_badgeWrapper_number}>
              {groupBadge(badges)["silver"].length}
            </span>
          )}
        </div>
      )}

      {groupBadge(badges)["gold"] && groupBadge(badges)["gold"].length > 0 && (
        <div className={styles.badgeSmallSummary_badgeWrapper}>
          <Gold />

          {groupBadge(badges)["gold"].length > 0 && (
            <span className={styles.badgeSmallSummary_badgeWrapper_number}>
              {groupBadge(badges)["gold"].length}
            </span>
          )}
        </div>
      )}

      {groupBadge(badges)["diamond"] &&
        groupBadge(badges)["diamond"].length > 0 && (
          <div className={styles.badgeSmallSummary_badgeWrapper}>
            <Diamond />

            {groupBadge(badges)["diamond"].length > 0 && (
              <span className={styles.badgeSmallSummary_badgeWrapper_number}>
                {groupBadge(badges)["diamond"].length}
              </span>
            )}
          </div>
        )}
    </div>
  );
};

export default BadgeSmallSummary;
