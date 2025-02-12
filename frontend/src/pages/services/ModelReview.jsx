import { Review } from "../../components/services/Review";
import HeroSection from "../../components/services/HeroSection";
import Background from "../../components/layout/BackGround";

const ModelReview = () => {
  const backgroundImageUrl = "/img/s2.jpg";
  return (
    <Background backgroundImageUrl={backgroundImageUrl}>
      <HeroSection
        id="about"
        title="Model Review"
        description="
       We make financial models accurate, reliable, and easy to use - spotting errors, validating assumptions, and boosting <br> functionality for smarter decisions."
      />
      <Review />
    </Background>
  );
};

export default ModelReview;
