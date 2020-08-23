import React from "react";
import NotFoundUndraw from "./NotFoundUndraw";
import styles from "./NotFound.module.scss";
import Logo from "icons/Logo";

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

        <div
          style={{
            margin: "44px",
          }}
        >
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
