import {
  FaSolarPanel,
  FaBuilding,
  FaCoins,
  FaBolt,
  FaOilCan,
  FaMountain,
  FaSignal,
  FaBusAlt,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaSolarPanel className="text-[#ffc541]" />,
    title: "Renewable & Clean Energy",
  },
  { icon: <FaBuilding className="text-[#ffc541]" />, title: "Infrastructure" },
  { icon: <FaCoins className="text-[#ffc541]" />, title: "Investment Funds" },
  { icon: <FaBolt className="text-[#ffc541]" />, title: "Power & Utilities" },
  { icon: <FaOilCan className="text-[#ffc541]" />, title: "Oil & Gas" },
  { icon: <FaMountain className="text-[#ffc541]" />, title: "Mining" },
  { icon: <FaSignal className="text-[#ffc541]" />, title: "Telecom" },
  { icon: <FaBusAlt className="text-[#ffc541]" />, title: "Transportation" },
];

const Features = () => {
  return (
    <section
      className="bg-blue-50 pt-16 relative"
      style={{
        backgroundImage: "url('/img/aboutus.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* List of Industries (40% width) */}
        <div className="md:w-2/5 w-full order-last sm:order-1">
          <div className="bg-textColor text-white p-8 rounded-tl-[50px] rounded-tr-[50px] flex-1 text-center overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 text-[#ffc541]">
              Industries We’ve Worked With
            </h3>
            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#ffc541] hover:text-black p-1"
                >
                  <div className="w-12 h-12 bg-blue-950 text-blue-600 rounded-md flex items-center justify-center text-2xl">
                    {industry.icon}
                  </div>
                  <h4 className="text-[16px] sm:text-lg font-medium">
                    {industry.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Title and Description (60% width) */}
        <div className="flex flex-col justify-center items-center md:w-3/5 order-1 sm:order-2 text-center sm:text-start">
          <h2 className="text-4xl sm:text-7xl font-extrabold text-white mb-4">
            We’re a Startup, but Our{" "}
            <span className="text-[#ffc541]">Expertise</span> Is World-Class!
          </h2>
          <p className="text-2xl text-gray-300">
            At ModVisor, we combine deep industry expertise with a global
            perspective to deliver financial models that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
