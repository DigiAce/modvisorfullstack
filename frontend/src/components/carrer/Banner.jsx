const Banner = () => {
  return (
    <div className="bg-yell pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 mt-12">
              Start your career
              <br className="hidden md:block" /> at{" "}
              <span className="text-textColor">ModVisor</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black mb-8">
              Shape the world with smart financial models—join us today!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
            <img
              src="/img/joinus.png"
              alt="Hero Image"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
