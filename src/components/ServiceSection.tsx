import { FunctionComponent } from "react";
import AIAutomationContainer from "./AIAutomationContainer";
import Property1Default2 from "./Property1Default2";
import styles from "./ServiceSection.module.css";

const ServiceSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent} data-scroll-to="frameContainer2">
      <div className={styles.servicesParent}>
        <div className={styles.services}>SERVICES</div>
        <b className={styles.exploreOurServices}>Explore our services</b>
        <div className={styles.embarkOnAJourneyOfInnovatWrapper}>
          <div className={styles.embarkOnAContainer}>
            <p className={styles.embarkOnA}>
              Embark on a journey of innovation with our comprehensive suite of
              services.
            </p>
            <p className={styles.embarkOnA}>
              Explore the future of success with our expertise at your
              fingertips.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <AIAutomationContainer
          featureDescription="AI Automation"
          aiAutomationDescription="Our AI expertise transforms routine "
          transformedTasks="tasks into intelligent processes,"
          businessDescription="propelling your business into the "
          strategicAutomationDescri="era of strategic automation."
          componentDimensions="/frame@2x.png"
          propWidth="294px"
          propPadding="var(--padding-41xl) var(--padding-xl) var(--padding-21xl)"
          propLeft="calc(50% - 47.5px)"
          propPadding1="var(--padding-xl) 23px"
          propWidth1="40.9px"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.gamificationConceptParent}>
              <div className={styles.gamificationConcept}>
                Gamification Concept
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-179@2x.png"
              />
              <div className={styles.experienceTheTrueContainer}>
                <p className={styles.embarkOnA}>
                  Experience the true power of gamifi-
                </p>
                <p className={styles.embarkOnA}>
                  cation, where strategic design meets
                </p>
                <p className={styles.embarkOnA}>
                  user motivation, creating immersive
                </p>
                <p className={styles.embarkOnA}>
                  experiences that leave lasting
                </p>
                <p className={styles.embarkOnA}>impressions.</p>
              </div>
            </div>
            <Property1Default2 property1DefaultFlexShrink="0" />
          </div>
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          </div>
        </div>
        <AIAutomationContainer
          featureDescription="Sales Funnel"
          aiAutomationDescription="Explore creativity together in creating"
          transformedTasks="your funnels with dynamic experiences"
          businessDescription="that captivate, convert and cultivate"
          strategicAutomationDescri="lasting relationships."
          componentDimensions="/frame@2x.png"
          propWidth="302px"
          propPadding="var(--padding-41xl) var(--padding-smi-5) var(--padding-21xl)"
          propLeft="calc(50% - 52.7px)"
          propPadding1="var(--padding-13xl) 20px"
          propWidth1="48.4px"
        />
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.gamificationConceptParent}>
              <div className={styles.gamificationConcept}>
                Software Solution
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-179@2x.png"
              />
              <div className={styles.exploreOurSoftwareContainer}>
                <p className={styles.embarkOnA}>
                  Explore our software solutions tailored
                </p>
                <p className={styles.embarkOnA}>
                  to meet your unique needs, delivering
                </p>
                <p className={styles.embarkOnA}>
                  efficiency, scalability, and a tech-
                </p>
                <p className={styles.embarkOnA}>
                  nological edge for your business.
                </p>
              </div>
            </div>
            <Property1Default2 property1DefaultFlexShrink="0" />
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.frameInner}
              alt=""
              src="/group-1284@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
