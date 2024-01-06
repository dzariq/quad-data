import { FunctionComponent } from "react";
import styles from "./BusinessSection.module.css";

const BusinessSection: FunctionComponent = () => {
  return (
    <div className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} data-scroll-to="frameContainer3">
          <div className={styles.frameGroup}>
            <div className={styles.takeYourBusinessToTheForeParent}>
              <b className={styles.takeYourBusinessContainer}>
                <p
                  className={styles.takeYourBusiness}
                >{`Take your business `}</p>
                <p className={styles.takeYourBusiness}>to the forefront.</p>
              </b>
              <div className={styles.craftingEngagingDigitalContainer}>
                <p className={styles.takeYourBusiness}>
                  Crafting engaging digital journeys, custom software and
                  automation
                </p>
                <p className={styles.takeYourBusiness}>excellence.</p>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.frameContainer}>
              <div className={styles.bookYourAppointmentParent}>
                <div className={styles.bookYourAppointment}>
                  Book Your Appointment
                </div>
                <img
                  className={styles.zondiconsaddSolid}
                  alt=""
                  src="/zondiconsaddsolid@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.streamlinecustomerSupport1Wrapper}>
                  <img
                    className={styles.streamlinecustomerSupport1Icon}
                    alt=""
                    src="/streamlinecustomersupport1solid@2x.png"
                  />
                </div>
                <div className={styles.frameItem} />
                <div className={styles.askLumidraxParent}>
                  <div className={styles.bookYourAppointment}>
                    Ask Lumidrax?
                  </div>
                  <div className={styles.aiPoweredAssistant}>
                    AI-Powered assistant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lumidraxMobHide1Wrapper}>
          <img
            className={styles.lumidraxMobHide1Icon}
            alt=""
            src="/lumidraxmobhide-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
