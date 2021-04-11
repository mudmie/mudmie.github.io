import * as React from "react";
import * as styles from "./back-to-top.module.scss";
import { FaArrowUp, FaLongArrowUp } from "react-icons/fa";

export class BackToTop extends React.Component {
  public render() {
    return <button onClick={this.scrollToTop} className={styles.backToTop}><div className={styles.circle}><FaArrowUp size={28}/></div><div className={styles.text}>Back to Top</div></button>;
  }

  public scrollToTop(): void {
    window.scrollTo(0,0);
  }
}
