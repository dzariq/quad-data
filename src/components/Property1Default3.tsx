import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default3.module.css";

type Property1Default3Type = {
  pageTitle?: string;

  /** Style props */
  property1DefaultFlexShrink?: CSSProperties["flexShrink"];
};

const Property1Default3: FunctionComponent<Property1Default3Type> = ({
  pageTitle,
  property1DefaultFlexShrink,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultFlexShrink]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.productWrapper}>
        <div className={styles.product}>{pageTitle}</div>
      </div>
    </div>
  );
};

export default Property1Default3;
