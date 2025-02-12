import { Build } from "../../components/services/Build";
import HeroSection from "../../components/services/HeroSection";
import Background from "../../components/layout/BackGround";

const ModelBuild = () => {
  const backgroundImageUrl = "/img/s1.jpg";
  return (
    <Background backgroundImageUrl={backgroundImageUrl}>
      <HeroSection
        id="about"
        title="Model Build"
        description="Custom financial models tailored to your unique needs,  ensuring clear, actionable insights <br> for confident and informed decision-making."
      />
      <Build />
    </Background>
  );
};

export default ModelBuild;
