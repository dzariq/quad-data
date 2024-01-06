import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1Default2 from "./Property1Default2";
import styles from "./AIAutomationContainer.module.css";

type AIAutomationContainerType = {
  featureDescription?: string;
  aiAutomationDescription?: string;
  transformedTasks?: string;
  businessDescription?: string;
  strategicAutomationDescri?: string;
  componentDimensions?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propLeft?: CSSProperties["left"];
  propPadding1?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const AIAutomationContainer: FunctionComponent<AIAutomationContainerType> = ({
  featureDescription,
  aiAutomationDescription,
  transformedTasks,
  businessDescription,
  strategicAutomationDescri,
  componentDimensions,
  propWidth,
  propPadding,
  propLeft,
  propPadding1,
  propWidth1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding1,
    };
  }, [propLeft, propPadding1]);

  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameGroup} style={frameDiv2Style}>
        <div className={styles.aiAutomationParent}>
          <div className={styles.aiAutomation}>{featureDescription}</div>
          <img className={styles.frameChild} alt="" src="/line-179@2x.png" />
          <div className={styles.ourAiExpertiseContainer}>
            <p className={styles.ourAiExpertise}>{aiAutomationDescription}</p>
            <p className={styles.ourAiExpertise}>{transformedTasks}</p>
            <p className={styles.ourAiExpertise}>{businessDescription}</p>
            <p className={styles.ourAiExpertise}>{strategicAutomationDescri}</p>
          </div>
        </div>
        <Property1Default2 property1DefaultFlexShrink="0" />
      </div>
      <div className={styles.frameWrapper} style={frameDiv3Style}>
        <img
          className={styles.frameIcon}
          alt=""
          src={componentDimensions}
          style={frameIconStyle}
        />
      </div>
    </div>
  );
};

export default AIAutomationContainer;
