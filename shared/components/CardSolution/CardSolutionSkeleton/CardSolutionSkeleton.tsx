import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./CardSolutionSkeleton.module.scss";

const CardSolutionSkeleton = () => {
  return (
    <div className={styles.cardSolutionSkeleton}>
      <Skeleton height={80} />

      <Skeleton height={92} variant="rect" />

      <Skeleton height={62} />

      <Skeleton height={72} variant="rect" />

      <div className={styles.cardSolutionSkeleton_flexRow}>
        <Skeleton height={36} width={160} variant="rect" />
      </div>
    </div>
  );
};

export default CardSolutionSkeleton;
