import React, { FunctionComponent } from "react";
import styles from "./CardUser.module.scss";
import cn from "classnames";

const CardUser: FunctionComponent<{
  user: any;
  detailsHidden?: boolean;
  small?: boolean;
}> = ({ user, detailsHidden, small }) => {
  if (!user) {
    return <div>Not Found</div>;
  }

  return (
    <a
      className={cn(styles.cardUser, {
        [styles.cardUser__centered]: !detailsHidden,
      })}
      href={`https://devchallenges.io/profile/${user.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={cn(styles.cardUser_imgWrapper, {
          [styles.cardUser_imgWrapper__small]: small,
        })}
      >
        <img
          loading="lazy"
          src={user.picture}
          className={styles.cardUser_img}
          alt={user.name}
        />
      </div>
      {!detailsHidden && (
        <div>
          <h5>{user.name}</h5>
          <h6>{user?.reputations || 0} reputations</h6>
        </div>
      )}
    </a>
  );
};

export default CardUser;
