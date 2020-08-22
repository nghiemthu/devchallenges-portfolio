import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";

import styles from "./Certificates.module.scss";
import moment from "moment";
import challengePaths from "data/challengePaths";

const Certificates: FunctionComponent<{ certificates: any }> = ({
  certificates,
}) => {
  const getPathDetails = (pathId: string) => {
    return challengePaths.find(({ id }) => pathId === id);
  };

  return (
    <Grid container direction="row" spacing={2}>
      {certificates &&
        certificates.map(
          ({
            pathId,
            id,
            createdAt,
          }: {
            pathId: string;
            id: string;
            createdAt: string;
          }) => (
            <Grid item xs={12} md={6} key={id}>
              <a
                className={styles.certificates_certificate}
                href={`/certificate/${id}`}
              >
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={4}>
                    <img
                      src={getPathDetails(pathId)?.certificateThumb}
                      alt="certificate thumbnail"
                    />
                  </Grid>

                  <Grid item xs={8}>
                    <h4>{getPathDetails(pathId)?.name}</h4>
                    <p
                      className={styles.certificates_issued}
                      style={{ marginBottom: "var(--space-lg)" }}
                    >
                      Issued on <b>{moment(createdAt).format("MMMM YYYY")}</b>
                    </p>
                  </Grid>
                </Grid>
              </a>
            </Grid>
          )
        )}
    </Grid>
  );
};

export default Certificates;
