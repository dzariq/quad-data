import { FunctionComponent } from "react";
import Property1Default3 from "./Property1Default3";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.groupParent}>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <div className={styles.groupWrapper}>
          <img className={styles.frameChild} alt="" src="/group-20@2x.png" />
        </div>
      </div>
      <div className={styles.menuHoverParent}>
        <Property1Default3 pageTitle="Home" property1DefaultFlexShrink="0" />
        <Property1Default3
          pageTitle="Services"
          property1DefaultFlexShrink="0"
        />
        <Property1Default3
          pageTitle="Projects"
          property1DefaultFlexShrink="0"
        />
        <Property1Default3 pageTitle="Contact" property1DefaultFlexShrink="0" />
        <Property1Default3 pageTitle="Career" property1DefaultFlexShrink="0" />
      </div>
      <div className={styles.iconamoonsearchBoldParent}>
        <img
          className={styles.iconamoonsearchBold}
          alt=""
          src="/iconamoonsearchbold@2x.png"
        />
        <div className={styles.frameItem} />
        <img
          className={styles.iconamoonsearchBold}
          alt=""
          src="/ggmenugrido@2x.png"
        />
      </div>
    </div>
  );
};

export default Header;
