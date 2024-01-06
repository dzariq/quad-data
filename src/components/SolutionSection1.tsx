import { FunctionComponent, useCallback } from "react";
import Property1Default1 from "./Property1Default1";
import styles from "./SolutionSection1.module.css";

const SolutionSection1: FunctionComponent = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCareerTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <div className={styles.groupWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-20@2x.png"
                />
              </div>
            </div>
            <div className={styles.theAcquisitionOfKnowledgeIWrapper}>
              <div className={styles.theAcquisitionOfContainer}>
                <p
                  className={styles.theAcquisitionOf}
                >{`‘ The acquisition of knowledge is the duty `}</p>
                <p className={styles.theAcquisitionOf}>
                  of each individual.’ - Ibn Sina  -
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.solutionForParent}>
            <div className={styles.solutionFor}>Solution for:</div>
            <div className={styles.eCommerceParent}>
              <div className={styles.eCommerce}>E-commerce</div>
              <div className={styles.eCommerce}>Tourism</div>
              <div className={styles.eCommerce}>{`Non-profits & CDFI`}</div>
              <div className={styles.eCommerce}>Finance Companies</div>
              <div className={styles.eCommerce}>Sports CRM</div>
              <div className={styles.eCommerce}>Government</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.usefulLinksParent}>
            <div className={styles.solutionFor}>Useful Links</div>
            <div className={styles.eCommerceParent}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.home} onClick={onServicesTextClick}>
                Services
              </div>
              <div className={styles.home} onClick={onProjectTextClick}>
                Project
              </div>
              <div className={styles.eCommerce}>Contact Us</div>
              <div className={styles.home} onClick={onCareerTextClick}>
                Career
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonParent}>
          <Property1Default1
            dimensionCode="/eparrowdown@2x.png"
            property1DefaultJustifyContent="flex-end"
            property1DefaultFlexShrink="0"
            property1DefaultTransform="unset"
            frameDivBorder="1.5px solid var(--color-lightslategray-100)"
            eparrowDownIconTransform="unset"
          />
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent1}>
              <div className={styles.streamlinecustomerSupport1Wrapper}>
                <img
                  className={styles.streamlinecustomerSupport1Icon}
                  alt=""
                  src="/streamlinecustomersupport1solid@2x.png"
                />
              </div>
              <div className={styles.frameItem} />
              <div className={styles.askLumidraxParent}>
                <div className={styles.askLumidrax}>Ask Lumidrax?</div>
                <div className={styles.aiPoweredAssistant}>
                  AI-Powered assistant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameInner} />
      <div className={styles.frameParent2}>
        <div className={styles.frameWrapper3}>
          <div className={styles.theAcquisitionOfKnowledgeIWrapper}>
            <div className={styles.eCommerce}>
              Copyrights 2024 All rights reserved.
            </div>
          </div>
        </div>
        <div className={styles.termsOfServiceWrapper}>
          <div className={styles.solutionFor}>Terms of Service</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.solutionFor}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection1;
