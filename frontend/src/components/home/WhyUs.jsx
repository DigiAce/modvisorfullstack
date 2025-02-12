import {
  FaChartBar,
  FaTruck,
  FaShieldAlt,
  FaCloud,
  FaTasks,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    title: "Advanced Analytics",
    description:
      "Track and analyze your data with powerful analytics tools. Gain valuable insights for better decision-making.",
    icon: <FaChartBar className="text-3xl text-gray-900" />,
    bgColor: "bg-purple-200",
  },
  {
    title: "Fast Integration",
    description:
      "Seamlessly integrate with your existing tools and systems for a smooth workflow experience.",
    icon: <FaTruck className="text-3xl text-gray-900" />,
    bgColor: "bg-teal-200",
  },
  {
    title: "Security First",
    description:
      "Ensure the safety of your data with top-notch security features. Your privacy is our priority.",
    icon: <FaShieldAlt className="text-3xl text-gray-900" />,
    bgColor: "bg-yellow-200",
  },
  {
    title: "Cloud Integration",
    description:
      "Access your data from anywhere with seamless cloud integration. Work without boundaries.",
    icon: <FaCloud className="text-3xl text-gray-900" />,
    bgColor: "bg-red-200",
  },
  {
    title: "Task Management",
    description:
      "Organize your workflow with efficient task management features. Stay on top of your projects effortlessly.",
    icon: <FaTasks className="text-3xl text-gray-900" />,
    bgColor: "bg-green-200",
  },
  {
    title: "Performance Metrics",
    description:
      "Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency.",
    icon: <FaBolt className="text-3xl text-gray-900" />,
    bgColor: "bg-orange-200",
  },
];

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, description, icon, bgColor }) => (
  <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
    <div
      className={`w-14 h-14 rounded-full ${bgColor} flex justify-center items-center`}
    >
      {icon}
    </div>
    <h3 className="mt-12 text-xl font-bold text-[#ffc541]">{title}</h3>
    <p className="mt-5 text-base text-white">{description}</p>
  </div>
);

const NewFeaturesSection = () => (
  <section id="new-features" className="py-8 sm:py-10 lg:py-16">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
          Why ModVisor is Your Go-To Partner for Business Success!
        </h2>
      </div>
      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  </section>
);

export default NewFeaturesSection;
