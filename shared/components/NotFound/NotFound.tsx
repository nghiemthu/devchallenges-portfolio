import React from "react";
import NotFoundUndraw from "./NotFoundUndraw";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={styles.notFound}>
        <div className={styles.notFound_img}>
          <NotFoundUndraw />
        </div>

        <h1>404 NOT FOUND</h1>

        <p>The page you are looking for does not exist or has been removed</p>
      </div>
    </div>
  );
};

export default NotFound;
