import { FunctionComponent } from "react";
import Header from "../components/Header";
import BusinessSection from "../components/BusinessSection";
import ServiceSection from "../components/ServiceSection";
import PreviousProjectsSection from "../components/PreviousProjectsSection";
import PartnerTestimonialSection from "../components/PartnerTestimonialSection";
import RecentCollaborationSection from "../components/RecentCollaborationSection";
import SolutionSection1 from "../components/SolutionSection1";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <BusinessSection />
      <div className={styles.frameParent}>
        <ServiceSection />
        <PreviousProjectsSection />
        <div className={styles.frameGroup}>
          <PartnerTestimonialSection />
          <RecentCollaborationSection />
        </div>
        <div className={styles.frameWrapper} data-scroll-to="frameContainer">
          <img className={styles.frameChild} alt="" src="/frame-483@2x.png" />
        </div>
        <SolutionSection1 />
      </div>
    </div>
  );
};

export default LandingPage;
