import { FunctionComponent } from "react";
import Property1Default1 from "./Property1Default1";
import Euro2022PredictorContainer from "./Euro2022PredictorContainer";
import styles from "./PreviousProjectsSection.module.css";

const PreviousProjectsSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent} data-scroll-to="frameContainer1">
      <div className={styles.projectsParent}>
        <div className={styles.projects}>PROJECTS</div>
        <b className={styles.previousProjects}>Previous Projects</b>
        <div className={styles.weveTeamedUpWithAwesomeBWrapper}>
          <div className={styles.weveTeamedUp}>
            We&apos;ve teamed up with awesome brands over the years to supercharge
            the digital world.
          </div>
        </div>
      </div>
      <div className={styles.buttonParent}>
        <Property1Default1
          dimensionCode="/eparrowdown@2x.png"
          property1DefaultJustifyContent="center"
          property1DefaultFlexShrink="0"
          property1DefaultTransform=" rotate(-90deg)"
          frameDivBorder="1.5px solid var(--color-lightslategray-100)"
          eparrowDownIconTransform=" rotate(90deg)"
        />
        <div className={styles.frameGroup}>
          <Euro2022PredictorContainer
            imageDimensions="/landing-page-1@2x.png"
            appDescription="Euro 2022 Predictor"
            appTitle="Match Predictor for StadiumAstro"
          />
          <div className={styles.fantasyHome2Parent}>
            <img
              className={styles.fantasyHome2}
              alt=""
              src="/fantasy-home-2@2x.png"
            />
            <div className={styles.stlPremier2023Parent}>
              <b className={styles.stlPremier2023}>STL Premier 2023</b>
              <div className={styles.sepakTakrawFantasyForStadiWrapper}>
                <div className={styles.sepakTakrawFantasy}>
                  Sepak Takraw Fantasy for StadiumAstro
                </div>
              </div>
            </div>
          </div>
          <Euro2022PredictorContainer
            imageDimensions="/player-form-4-1@2x.png"
            appDescription="Fieldpass"
            appTitle="Football Management System"
          />
        </div>
        <Property1Default1
          dimensionCode="/eparrowdown@2x.png"
          property1DefaultJustifyContent="center"
          property1DefaultFlexShrink="0"
          property1DefaultTransform=" rotate(-90deg)"
          frameDivBorder="1.5px solid var(--color-darkgray-100)"
          eparrowDownIconTransform=" rotate(90deg)"
        />
      </div>
    </div>
  );
};

export default PreviousProjectsSection;
