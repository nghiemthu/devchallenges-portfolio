import React, { FunctionComponent } from "react";

import styles from "./Badge.module.scss";

import cn from "classnames";

import Tooltip from "@material-ui/core/Tooltip";
import { BadgeCategory, BadgeTypes } from "types/badge";
import Bronze from "icons/Bronze";
import Silver from "icons/Silver";
import Gold from "icons/Gold";
import Diamond from "icons/Diamond";
import Penalty from "icons/Penalty";
import PenaltyTwo from "icons/PenaltyTwo";

const Badge: FunctionComponent<{
  type: BadgeTypes;
  label: string;
  category?: BadgeCategory;
  description?: string;
}> = ({ type, label, category = "feedback", description }) => {
  return (
    <Tooltip title={description || ""} placement="right">
      <div
        className={cn(styles.badge, {
          [styles.badge_feedback]: category === "feedback",
          [styles.badge_solution]: category === "solution",
          [styles.badge_participant]: category === BadgeCategory.participant,
          [styles.badge_patreon]: category === "patreon",
          [styles.badge_penalty]: category === "penalty",
        })}
      >
        <div className={styles.badge_symbol}>
          {type === "bronze" && <Bronze />}

          {type === "silver" && <Silver />}

          {type === "gold" && <Gold />}

          {type === "diamond" && <Diamond />}

          {type === "penalty" && <Penalty />}

          {type === "penaltyTwo" && <PenaltyTwo />}
        </div>

        <label>{label}</label>
      </div>
    </Tooltip>
  );
};

export default Badge;
