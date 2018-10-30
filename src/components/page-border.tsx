import * as React from "react";
import * as styles from "./page-border.module.scss";

export default class PageBorder extends React.Component {
  public render() {
    return (
      <>
        <div className={styles.topBorder} />
        <div className={styles.rightBorder} />
        <div className={styles.bottomBorder} />
        <div className={styles.leftBorder} />
      </>
    );
  }
}
