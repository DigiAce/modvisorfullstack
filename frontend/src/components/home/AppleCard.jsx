"use client";

import { Carousel, Card } from "../ui/AppleCurouselCard";
import {
  FaApple,
  FaProductHunt,
  FaChartLine,
  FaUsers,
  FaLaptop,
} from "react-icons/fa"; // Example icons

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-12">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-textColor font-sans text-center">
        Why ModVisor is Your Go-To Partner for Business Success!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Content for each card
const content = {
  "Tailored Financial Models": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        Every solution is customized to meet your business&apos;s specific needs
        and objectives.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>
          We customize every financial model to align with your unique business
          goals and industry needs.
        </li>
        <li>
          Our solutions ensure precision and relevance, addressing your specific
          challenges and opportunities.
        </li>
        <li>
          From startups to established enterprises, we deliver models that fit
          your business perfectly.
        </li>
      </ul>
    </div>
  ),
  "Seasoned Professionals": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        Our team brings years of specialized experience to deliver accurate,
        customized financial models.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>
          Our team consists of experts with extensive experience in financial
          modeling across industries.
        </li>
        <li>
          We combine technical expertise with strategic insight to deliver
          actionable results.
        </li>
        <li>
          Every model is rigorously reviewed for accuracy and reliability by
          seasoned professionals.
        </li>
      </ul>
    </div>
  ),
  "Quality Meets Affordability": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        We deliver high-quality financial models at unbeatable prices - making
        premium results accessible without the premium price tag.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>
          Enjoy premium-quality financial models without breaking the bank.
        </li>
        <li>
          We make high-end financial analysis accessible for businesses of all
          sizes.
        </li>
        <li>
          Transparent pricing ensures you receive exceptional value for your
          investment.
        </li>
      </ul>
    </div>
  ),
  "Clear and Actionable Insights": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        We make complex data easy to understand, helping you make confident
        decisions.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>
          We simplify complex financial data into easy-to-understand insights.
        </li>
        <li>Our models empower you to make informed, confident decisions.</li>
        <li>
          Visual dashboards and reports ensure clarity and transparency in every{" "}
        </li>
      </ul>
    </div>
  ),
  "Long-Term Partnerships": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        We build lasting relationships, focused on your continued growth and
        success.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>We’re committed to your long-term success and business growth.</li>
        <li>
          Our approach fosters trust, collaboration, and lasting relationships.
        </li>
        <li>
          Count on us as your reliable partner for financial expertise whenever
          you need it.
        </li>
      </ul>
    </div>
  ),
  "Future-Ready Solutions": (
    <div>
      {/* <p className="text-white text-base md:text-2xl font-sans">
        Our models are designed to drive growth and adapt as your business
        evolves.
      </p> */}
      <ul className="mt-4 list-disc text-base md:text-2xl font-sans">
        <li>
          Our models are designed to adapt to your business’s evolving needs.
        </li>
        <li>
          We integrate flexibility and scalability to support your growth
          journey.
        </li>
        <li>
          Stay ahead of the curve with solutions that drive innovation
          and sustainability.
        </li>
      </ul>
    </div>
  ),
};

// Updated data with icons
const data = [
  {
    icon: <FaApple className="text-4xl text-neutral-700" />,
    title: "Tailored Financial Models",
    src: "/img/11.jpg",
    content: content["Tailored Financial Models"],
  },
  {
    icon: <FaProductHunt className="text-4xl text-neutral-700" />,
    title: "Seasoned Professionals",
    src: "/img/2.jpg",
    content: content["Seasoned Professionals"],
  },
  {
    icon: <FaChartLine className="text-4xl text-neutral-700" />,
    title: "Quality Meets Affordability",
    src: "/img/3.jpg",
    content: content["Quality Meets Affordability"],
  },
  {
    icon: <FaUsers className="text-4xl text-neutral-700" />,
    title: "Clear and Actionable Insights",
    src: "/img/4.jpg",
    content: content["Clear and Actionable Insights"],
  },
  {
    icon: <FaLaptop className="text-4xl text-neutral-700" />,
    title: "Long-Term Partnerships",
    src: "/img/5.jpg",
    content: content["Long-Term Partnerships"],
  },
  {
    icon: <FaApple className="text-4xl text-neutral-700" />,
    title: "Future-Ready Solutions",
    src: "/img/66.jpg",
    content: content["Future-Ready Solutions"],
  },
];
