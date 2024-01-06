import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Default2.module.css";

type Property1Default2Type = {
  /** Style props */
  property1DefaultFlexShrink?: CSSProperties["flexShrink"];
};

const Property1Default2: FunctionComponent<Property1Default2Type> = ({
  property1DefaultFlexShrink,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultFlexShrink]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      <div className={styles.readMore}>Read more</div>
    </div>
  );
};

export default Property1Default2;
