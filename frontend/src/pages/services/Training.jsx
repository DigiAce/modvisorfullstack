import { Trainings } from "../../components/services/Trainings";
import HeroSection from "../../components/services/HeroSection";
import Background from "../../components/layout/BackGround";

const Training = () => {
  const backgroundImageUrl = "/img/s3.jpg";
  return (
    <Background backgroundImageUrl={backgroundImageUrl}>
      <HeroSection
        id="about"
        title="Training"
        description="ModVisor’s training boosts your Excel and financial modeling skills with engaging, hands-on learning,<br> focused on delivering real-world results—say goodbye to boring lectures and unlock your full potential!"
      />
      <Trainings />
    </Background>
  );
};

export default Training;
