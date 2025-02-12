import { CardHoverEffect } from "../components/services/Build";
import HeroSection from "../components/services/HeroSection";
import heroData from "../data/data";

const Services = () => {
  return (
    <div>
      {heroData.map((item, index) => (
        <HeroSection
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
        />
      ))}
      <CardHoverEffect />
    </div>
  );
};

export default Services;
