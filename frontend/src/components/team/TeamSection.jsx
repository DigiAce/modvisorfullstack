// Dummy data for the team members
const teamData = [
  {
    imgSrc: "/img/team/1.png", // Replace with actual image path
    name: "Mr. Devasheesh Pant",
    title: "Managing Director",
    description:
      "Mr. Devasheesh Pant is a seasoned financial modeling professional with nearly 14 years of experience. He has led and reviewed complex financial models across industries such as Infrastructure, Transport, Oil & Gas, Renewables, Mini Grid, and BESS.\n\nAs the founder of ModVisor Business Consultants, Devasheesh specializes in Project Finance, Corporate Reporting, Budgeting, and advanced Technical Models like Depot Modeling. His deep analytical acumen ensures accurate and actionable insights, empowering businesses and entrepreneurs to achieve their financial goals with confidence.",
  },
  {
    imgSrc: "/img/team/3a.png", // Replace with actual image path
    name: "Dr. Ashok Kumar Pant",
    title: "Director",
    description:
      "Dr. Ashok Kumar Pant, a visionary entrepreneur and co-founder of Modvisor Business Consultants, is a driving force in the business world. With a sharp analytical mind and a passion for innovation, he has consistently inspired aspiring entrepreneurs. His strong leadership and management skills have been instrumental in the growth and success of Modvisor.",
  },
  {
    imgSrc: "/img/team/1a.png", // Replace with actual image path
    name: "Mrs. Kanchan Lata Pant",
    title: "Director",
    description:
      "Mrs. Kanchan Lata Pant, a dynamic professional and co-founder of Modvisor Business Consultants, brings a wealth of experience in talent acquisition and organizational development. She is a key player in identifying and recruiting top-tier talent, shaping organizational culture, and ensuring the success of Modvisor's clients.",
  },
  {
    imgSrc: "/img/team/5.png", // Replace with actual image path
    name: "Mrs. Akanksha Pant",
    title: "Director",
    description:
      "Mrs. Akanksha Pant, a seasoned technology professional and co-founder of Modvisor Business Consultants, is committed to driving innovation and digital transformation. With over a decade of corporate experience, she plays a pivotal role in keeping Modvisor at the forefront of technological advancements and ensuring the company's continued success.",
  },
  {
    imgSrc: "/img/team/4.png", // Replace with actual image path
    name: "Mr. Mouleesh K",
    title: "Financial Analyst",
    description:
      "Mr. Mouleesh K holds an MBA degree in Finance, with strong analytical and financial modeling skills, and is currently a Financial Analyst at ModVisor. He specializes in building and reviewing complex financial models, ensuring their accuracy and reliability. Additionally, Mouleesh has a talent for transforming raw data into visually appealing dashboards, making financial insights both engaging and easy to understand.",
  },
  {
    imgSrc: "/img/team/2a.png", // Replace with actual image path
    name: "Mr. Hem Pandey",
    title: "Manager Accounts",
    description:
      "Mr. Hem Pandey holds an MBA degree in Finance and is an expert in managing accounts. With a strong focus on accurate record-keeping and financial reporting, his keen attention to detail ensures compliance with regulatory standards and optimizes accounting processes, providing valuable insights for informed decision-making.",
  },
];

const TeamSection = () => {
  return (
    <div className="text-white max-w-screen-2xl mx-auto mt-32">
      {teamData.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } items-center justify-center p-8`}
        >
          {/* Image Section */}
          <div className="md:w-1/3 p-4 flex justify-center">
            <img
              src={section.imgSrc}
              alt={section.name}
              className="rounded-lg shadow-lg w-64 md:w-96"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-yellow-500 text-3xl font-bold">
              {section.name}
            </h2>
            <h3 className="text-lg mb-4 text-gray-300 font-bold">
              {section.title}
            </h3>
            <p className="text-lg whitespace-pre-line text-gray-200">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
