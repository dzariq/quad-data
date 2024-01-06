import { FunctionComponent } from "react";
import styles from "./RecentCollaborationSection.module.css";

const RecentCollaborationSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.recentCollaborationWrapper}>
          <div className={styles.recentCollaboration}>Recent collaboration</div>
        </div>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.stadiumastroV11Parent}>
        <img
          className={styles.stadiumastroV11}
          alt=""
          src="/stadiumastro-v1-1@2x.png"
        />
        <div className={styles.kdafc2Parent}>
          <img className={styles.kdafc2Icon} alt="" src="/kdafc-2@2x.png" />
          <b className={styles.kdaFc}>KDA FC</b>
        </div>
        <div className={styles.logoFas2Parent}>
          <img className={styles.kdafc2Icon} alt="" src="/logofas-2@2x.png" />
          <div className={styles.footballAssociationOfContainer}>
            <p className={styles.footballAssociation}>FOOTBALL ASSOCIATION</p>
            <p className={styles.footballAssociation}>OF SELANGOR</p>
          </div>
        </div>
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      </div>
    </div>
  );
};

export default RecentCollaborationSection;
