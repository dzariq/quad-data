import { FunctionComponent } from "react";
import styles from "./Euro2022PredictorContainer.module.css";

type Euro2022PredictorContainerType = {
  imageDimensions?: string;
  appDescription?: string;
  appTitle?: string;
};

const Euro2022PredictorContainer: FunctionComponent<
  Euro2022PredictorContainerType
> = ({ imageDimensions, appDescription, appTitle }) => {
  return (
    <div className={styles.landingPage1Parent}>
      <img className={styles.landingPage1} alt="" src={imageDimensions} />
      <div className={styles.euro2022PredictorParent}>
        <b className={styles.euro2022Predictor}>{appDescription}</b>
        <div className={styles.matchPredictorForStadiumastWrapper}>
          <div className={styles.matchPredictorFor}>{appTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Euro2022PredictorContainer;
