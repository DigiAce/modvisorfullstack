const HeroSection = () => {
  const cards = [
    {
      img: "/img/c1.png",
      title: "Model Build",
      description:
        "We deliver custom, user-friendly models that simplify complex data, ensuring accuracy, flexibility, and actionable insights to drive confident decisions.",
      link: "services/modelbuild",
    },
    {
      img: "/img/c2.png",
      title: "Model Review",
      description:
        "We make financial models accurate, reliable, and easy to use - spotting errors, validating assumptions, and boosting functionality for smarter decisions.",
      link: "services/modelreview",
    },
    {
      img: "/img/c3.png",
      title: "Training",
      description:
        "ModVisor offers customized training for individuals and corporate teams, focusing on <span style='color: #000; font-weight: bold;'>Excel and practical Financial Modelling skills</span> designed to meet your specific business needs.",
      link: "services/training",
    },
  ];

  return (
    <div className="relative text-white flex flex-col items-center mb-26 bg-[#e0f4ff]">
      {/* Background Video */}
      <div className="relative w-full h-[80vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          autoPlay
          loop
          muted
        >
          <source src="/img/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

        {/* Heading Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Bespoke Financial Models, <br /> Because Your Business Deserves the
            Best.
          </h1>
          <a
            href="https://wa.link/kjjqfl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Start a conversation
            </button>
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 w-full max-w-6xl -mt-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-[50px] shadow-lg overflow-hidden group"
            >
              {/* Hover Effect Circle */}
              <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-navBarColor group-hover:scale-[1500%] duration-500"></div>

              {/* Card Title with Icon */}
              <div className="relative z-20 flex items-center space-x-3">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-10 h-10 transition duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <h2 className="font-bold text-xl sm:text-3xl font-Poppins text-textColor group-hover:text-[#ffc541] duration-500">
                  {card.title}
                </h2>
              </div>

              {/* Card Description */}
              <p
                className="mt-2 text-[#000] text-md sm:text-xl group-hover:text-white transition-all group-hover:opacity-[0.8] duration-300"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />

              {/* Arrow Link */}
              <a
                href={card.link}
                className="relative z-20 mt-4 inline-block text-blue-500 group-hover:text-white transition duration-300 bg-[#ffc541] rounded-full p-1 ml-64"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
