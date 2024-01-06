import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default1.module.css";

type Property1Default1Type = {
  dimensionCode?: string;

  /** Style props */
  property1DefaultJustifyContent?: CSSProperties["justifyContent"];
  property1DefaultFlexShrink?: CSSProperties["flexShrink"];
  property1DefaultTransform?: CSSProperties["transform"];
  frameDivBorder?: CSSProperties["border"];
  eparrowDownIconTransform?: CSSProperties["transform"];
};

const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  dimensionCode,
  property1DefaultJustifyContent,
  property1DefaultFlexShrink,
  property1DefaultTransform,
  frameDivBorder,
  eparrowDownIconTransform,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: property1DefaultJustifyContent,
      flexShrink: property1DefaultFlexShrink,
      transform: property1DefaultTransform,
    };
  }, [
    property1DefaultJustifyContent,
    property1DefaultFlexShrink,
    property1DefaultTransform,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      border: frameDivBorder,
    };
  }, [frameDivBorder]);

  const eparrowDownIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: eparrowDownIconTransform,
    };
  }, [eparrowDownIconTransform]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.eparrowDownWrapper} style={frameDivStyle}>
        <img
          className={styles.eparrowDownIcon}
          alt=""
          src={dimensionCode}
          style={eparrowDownIconStyle}
        />
      </div>
    </div>
  );
};

export default Property1Default1;
