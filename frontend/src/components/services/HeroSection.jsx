const HeroSection = ({
  id,
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative w-full h-[300px]" // Set section height
      id={id || "hero"} // Dynamic ID with default fallback
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark effect */}
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-[#ffc541] font-medium text-5xl md:text-6xl leading-tight mb-4 mt-32">
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl text-white mb-8"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {/* {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="px-8 py-4 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
          >
            {buttonText}
          </a>
        )} */}
      </div>
    </div>
  );
};

export default HeroSection;
