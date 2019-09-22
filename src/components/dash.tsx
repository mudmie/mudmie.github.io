import * as React from "react";
import * as styles from "./dash.module.scss";

export class Dash extends React.Component {
  public render() {
    return <hr className={styles.smallDash} />;
  }
}
