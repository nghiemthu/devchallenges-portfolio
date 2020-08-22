import React, { FunctionComponent } from "react";
import groupBy from "lodash/groupBy";

import styles from "./BadgeSummary.module.scss";
import Grid from "@material-ui/core/Grid";

import cn from "classnames";
import getBadge from "data/getBadge";
import Badge from "components/Badge/Badge";

const BadgeSummary: FunctionComponent<{
  badges: any;
  rows?: 1 | 3;
}> = ({ badges, rows = 3 }) => {
  const namedBadges = (badges: any) => {
    return groupBy(badges, "name");
  };

  const typedBadges = (badges: any) => {
    return groupBy(badges, "type");
  };

  const bronzeBadges = namedBadges(typedBadges(badges)["bronze"]);

  const silverBadges = namedBadges(typedBadges(badges)["silver"]);

  const goldBadges = namedBadges(typedBadges(badges)["gold"]);

  const diamondBadges = namedBadges(typedBadges(badges)["diamond"]);

  if (!badges) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.badgeSummary}>
      <Grid container spacing={2}>
        {Object.keys(bronzeBadges).length > 0 && (
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.badgeSummary_panel}>
              <h5>Bronze</h5>
              {Object.keys(bronzeBadges).map((key, index) => (
                <React.Fragment key={key}>
                  <div
                    className={cn(styles.badgeSummary_badgeWrapper, {
                      [styles.badgeSummary_badgeWrapper_borderBottom]:
                        index < Object.keys(bronzeBadges).length - 1,
                    })}
                  >
                    <Badge
                      type={getBadge(key).type}
                      label={getBadge(key).label}
                      category={getBadge(key).category}
                      description={getBadge(key).description}
                    />

                    {bronzeBadges[key].length > 1 && (
                      <div className={styles.badgeSummary_badgeWrapper_number}>
                        x {bronzeBadges[key].length}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        )}

        {Object.keys(silverBadges).length > 0 && (
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.badgeSummary_panel}>
              <h5>Silver</h5>
              {Object.keys(silverBadges).map((key, index) => (
                <React.Fragment key={key}>
                  <div
                    className={cn(styles.badgeSummary_badgeWrapper, {
                      [styles.badgeSummary_badgeWrapper_borderBottom]:
                        index < Object.keys(silverBadges).length - 1,
                    })}
                  >
                    <Badge
                      type={getBadge(key).type}
                      label={getBadge(key).label}
                      category={getBadge(key).category}
                      description={getBadge(key).description}
                    />

                    {silverBadges[key].length > 1 && (
                      <div className={styles.badgeSummary_badgeWrapper_number}>
                        x {silverBadges[key].length}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        )}

        {Object.keys(goldBadges).length > 0 && (
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.badgeSummary_panel}>
              <h5>Gold</h5>
              {Object.keys(goldBadges).map((key, index) => (
                <React.Fragment key={key}>
                  <div
                    className={cn(styles.badgeSummary_badgeWrapper, {
                      [styles.badgeSummary_badgeWrapper_borderBottom]:
                        index < Object.keys(goldBadges).length - 1,
                    })}
                  >
                    <Badge
                      type={getBadge(key).type}
                      label={getBadge(key).label}
                      category={getBadge(key).category}
                      description={getBadge(key).description}
                    />

                    {goldBadges[key].length > 1 && (
                      <div className={styles.badgeSummary_badgeWrapper_number}>
                        x {goldBadges[key].length}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        )}

        {Object.keys(diamondBadges).length > 0 && (
          <Grid item xs={12} sm={6} lg={3}>
            <div className={styles.badgeSummary_panel}>
              <h5>Diamond</h5>
              {Object.keys(diamondBadges).map((key, index) => (
                <React.Fragment key={key}>
                  <div
                    className={cn(styles.badgeSummary_badgeWrapper, {
                      [styles.badgeSummary_badgeWrapper_borderBottom]:
                        index < Object.keys(diamondBadges).length - 1,
                    })}
                  >
                    <Badge
                      type={getBadge(key).type}
                      label={getBadge(key).label}
                      category={getBadge(key).category}
                      description={getBadge(key).description}
                    />

                    {diamondBadges[key].length > 1 && (
                      <div className={styles.badgeSummary_badgeWrapper_number}>
                        x {diamondBadges[key].length}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default BadgeSummary;
