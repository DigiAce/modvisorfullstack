import { useEffect, useState } from "react";

const AboutUs = () => {
  const cards = [
    {
      description:
        "Welcome to ModVisor (short for Modelling Advisor) - your friendly neighborhood financial Modelling superhero! A start-up, with a mission to transform spreadsheets from mere chaos into masterpieces of clarity and flexibility. Think of us as your personal trainers for financial models -no more heavy lifting!",
      bgColor: "bg-navBarColor",
    },
    {
      description:
        "Located in the breathtaking Pithoragarh district of India, we thrive in the serene lap of the Himalayas, where creativity flows as freely as the mountain air. Here, we believe great ideas don’t need to be confined to stuffy boardrooms. So, whether you're in the bustling streets of New York, the stunning shores of Australia, or anywhere across the globe, we're ready to deliver our top-notch services right to your screen.",
      bgColor: "bg-gray-600",
    },
    {
      description:
        "At ModVisor, we structure our models to be not just effective but sustainable—because just like your favorite jeans, they should stand the test of time!",
      bgColor: "bg-gray-100",
    },
  ];

  const [clients, setClients] = useState(0);
  const [team, setTeam] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const incrementCounter = (setter, target, step) => {
      let count = 0;
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 30); // Adjust speed here
    };

    incrementCounter(setClients, 10000, 50); // 10k+ clients
    incrementCounter(setTeam, 1500, 10); // 1.5k+ team
    incrementCounter(setProjects, 24100, 100); // 24.1k+ projects
  }, []);

  return (
    <section id="about">
      <div className="bg-[#e0f4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col gap-8">
          {/* Heading and Counters */}
          <div className="text-center lg:text-left mb-8">
            <span className="block text-2xl text-gray-500 font-extrabold">
              About Us
            </span>
            <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mt-2">
              ModVisor: Crafting Financial Models That Drive Success!
            </h2>
            {/* <div className="flex justify-center lg:justify-start space-x-8 mt-4 text-m sm:text-xl font-semibold text-textColor">
          <span>{clients.toLocaleString()}+ Deal with Clients</span>
          <span>{team.toLocaleString()}+ Team Members</span>
          <span>{projects.toLocaleString()}+ Completed Project</span>
        </div> */}
          </div>

          {/* Left Side - Image */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-6/12">
              <img
                src="/img/aboutus.jpg"
                alt="About Us Image"
                className="w-full h-full object-cover rounded-[50px] shadow-lg"
              />
            </div>

            {/* Right Side - Combined Card */}
            <div className="lg:w-6/12 space-y-8">
              <div
                className={`p-6 rounded-[50px] shadow-lg ${cards[0].bgColor} ${cards[1].bgColor}`}
              >
                <p className="text-white font-medium">{cards[0].description}</p>
                <p className="text-white font-medium">{cards[1].description}</p>
              </div>
              <div
                className={`p-6 rounded-[50px] shadow-lg ${cards[2].bgColor}`}
              >
                <h3 className="text-xl font-bold mb-2">{cards[2].title}</h3>
                <p className="text-gray-600 font-medium">
                  {cards[2].description}
                </p>
                {/* <button className="mt-4 px-4 py-2 bg-[#ffc541] text-black font-semibold rounded shadow hover:bg-blue-700">
                Read More
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
