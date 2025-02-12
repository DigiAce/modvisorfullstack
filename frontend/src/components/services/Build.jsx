import { HoverEffect } from "../ui/CardEffect";

export function Build() {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title Section */}

        <h2 className="text-2xl font-bold text-[#ffc541] text-center mb-0 mt-14 sm:mt-4">
          Our Expertise in Different Types of Modelling Assignments
        </h2>

        {/* Cards Section */}
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Project Finance ",
    description:
      "We create robust models for project finance and public-private partnerships across sectors like renewable energy, infrastructure, power, and telecom, helping you assess bids, forecast cash flow, and manage operational assets.",
  },
  {
    title: "Transaction (M&A, LBO, IPO) ",
    description:
      "Our models assist in evaluating financial viability and potential outcomes for transactions, including mergers, leveraged buyouts, and IPOs.",
  },
  {
    title: "Corporate Reporting, Budgeting & Forecasting",
    description:
      "We streamline budgeting, forecasting, and reporting processes, providing you with clear insights for strategic decision-making.",
  },
  {
    title: "Pricing Models",
    description:
      "Our custom pricing models ensure that your pricing strategies are competitive, profitable, and aligned with market demands.",
  },
  {
    title: "Cost Benefit Analysis Models",
    description:
      "Our models evaluate the financial viability of projects by comparing costs against expected benefits to ensure profitable outcomes.",
  },
  {
    title: "Fund Models",
    description:
      "Tailored fund models that track performance, investment strategies, and ensure accurate financial forecasting for your fund's success.",
  },

  {
    title: "Portfolio Consolidation",
    description:
      "Our models simplify portfolio consolidation, enabling you to monitor and manage assets effectively across different projects or business units.",
  },
  {
    title: "Valuation Models",
    description:
      "Accurate valuations supporting mergers, acquisitions, and investments across industries like oil & gas, clean energy, and telecom.",
  },
  {
    title: "Feasibility Models",
    description:
      "We design feasibility models to assess project viability, helping you evaluate risks, returns, and project success potential.",
  },
  {
    title: "Depot Modelling for Train Infrastructure",
    description:
      "We specialize in not just financial Modelling but also technical Modelling, such as depot Modelling. Our approach combines in-depth analysis with practical recommendations, helping clients optimize operations, improve efficiency, and justify investment decisions.",
  },
];
