const Banner = () => {
  return (
    <div className="bg-yell pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 mt-12">
              Introducing the Experts
              <br className="hidden md:block" />
              <span className="text-textColor"> Behind Our </span> Success.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black mb-8">
              Startup Energy, Powered by Seasoned Experts.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
            <img
              src="/img/team/team.png"
              alt="Hero Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
