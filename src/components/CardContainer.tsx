import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  featureDescription?: string;
  supportDescription?: string;
  testimonialText?: string;
  imageDescription?: string;
  employeeName?: string;
  roleDescription?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  featureDescription,
  supportDescription,
  testimonialText,
  imageDescription,
  employeeName,
  roleDescription,
  propPadding,
  propBorderRadius,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image16IconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.frameParent} style={frameDiv4Style}>
      <div className={styles.icroundStarParent}>
        <img
          className={styles.icroundStarIcon}
          alt=""
          src="/icroundstar@2x.png"
        />
        <img
          className={styles.icroundStarIcon}
          alt=""
          src="/icroundstar@2x.png"
        />
        <img
          className={styles.icroundStarIcon}
          alt=""
          src="/icroundstar@2x.png"
        />
        <img
          className={styles.icroundStarIcon}
          alt=""
          src="/icroundstar@2x.png"
        />
        <img
          className={styles.icroundStarIcon}
          alt=""
          src="/icroundstar@2x.png"
        />
      </div>
      <div className={styles.promptAndReliableContainer}>
        <p className={styles.promptAndReliable}>{featureDescription}</p>
        <p className={styles.promptAndReliable}>{supportDescription}</p>
        <p className={styles.promptAndReliable}>{testimonialText}</p>
      </div>
      <div className={styles.image16Parent}>
        <img
          className={styles.image16Icon}
          alt=""
          src={imageDescription}
          style={image16IconStyle}
        />
        <div className={styles.sengFooParent}>
          <div className={styles.sengFoo}>{employeeName}</div>
          <div className={styles.editorStadiumAstro}>{roleDescription}</div>
        </div>
      </div>
      <div className={styles.ridoubleQuotesRWrapper}>
        <div className={styles.ridoubleQuotesR}>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
