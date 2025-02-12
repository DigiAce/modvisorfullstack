const Banner = () => {
  return (
    <div className="bg-yell pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-4xl md:text-4xl lg:text-6xl text-white font-bold mb-6 mt-12">
              Mastering Financial Modelling:
              <br className="hidden md:block" />
              <span className="text-textColor">
                {" "}
                Tips, Trends, and Strategies{" "}
              </span>{" "}
            </h1>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
            <img
              src="/img/bg-blog.png"
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
