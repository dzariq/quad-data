import { FunctionComponent } from "react";
import CardContainer from "./CardContainer";
import styles from "./PartnerTestimonialSection.module.css";

const PartnerTestimonialSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.whatOurPartnerSayWrapper}>
        <b className={styles.whatOurPartner}>What our partner say</b>
      </div>
      <div className={styles.frameGroup}>
        <CardContainer
          featureDescription="Prompt and reliable support. QDSB"
          supportDescription="consistently exceeds expectations "
          testimonialText="in resolving technical issues."
          imageDescription="/image-16@2x.png"
          employeeName="Seng Foo"
          roleDescription="Editor, Stadium Astro"
          propPadding="var(--padding-xl) 21px var(--padding-xl) var(--padding-xl)"
          propBorderRadius="41px"
        />
        <CardContainer
          featureDescription="Deep knowledge guided every"
          supportDescription="decision, showcasing the team's "
          testimonialText="expertise in the field."
          imageDescription="/mask-group@2x.png"
          employeeName="Tajul Arifin"
          roleDescription="Marketing, KDA FC"
          propPadding="var(--padding-xl) var(--padding-17xl) var(--padding-xl) var(--padding-xl)"
          propBorderRadius="unset"
        />
        <CardContainer
          featureDescription="Integration of cutting-edge software"
          supportDescription="and hardware has effortlessly"
          testimonialText="enhanced our productivity."
          imageDescription="/mask-group@2x.png"
          employeeName="Izrin Nabil"
          roleDescription="Secretary General, FAS"
          propPadding="var(--padding-xl) var(--padding-base)"
          propBorderRadius="unset"
        />
        <div className={styles.frameContainer}>
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
          <div className={styles.theSupportWeContainer}>
            <p className={styles.theSupportWe}>
              The support we received from the
            </p>
            <p className={styles.theSupportWe}>
              team was prompt, courteous, and
            </p>
            <p className={styles.theSupportWe}>{`highly effective. `}</p>
          </div>
          <div className={styles.image19Parent}>
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
            <div className={styles.khairulaziziParent}>
              <div className={styles.khairulazizi}>Khairulazizi</div>
              <div className={styles.coFounderSenangpay}>
                <span className={styles.c}>c</span>o-Founder, SenangPay
              </div>
            </div>
          </div>
          <div className={styles.ridoubleQuotesRWrapper}>
            <div className={styles.ridoubleQuotesR}>
              <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerTestimonialSection;
