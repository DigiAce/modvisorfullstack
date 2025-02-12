import { HoverEffect } from "../ui/CardEffect";

export function Trainings() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-2xl font-bold text-[#ffc541] text-center mb-0 mt-14 sm:mt-4">
        Ready to Level Up Your Financial Modelling Game?
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Personalized Training",
    description:
      "Our 1-on-1 sessions provide focused, individualized learning. We customize each lesson to match your pace and specific financial modelling needs.",
  },
  {
    title: "Corporate Team Training",
    description:
      "We offer customized workshops for corporate teams to enhance collective modelling skills. Our hands-on approach promotes collaboration and effective problem-solving within teams.",
  },
  {
    title: "Online Flexibility",
    description:
      "Access training remotely through live, interactive online sessions. Learn from anywhere at your convenience, all while engaging with expert trainers.",
  },
  {
    title: "Onsite Training",
    description:
      "We bring the training to you with immersive onsite sessions. This allows for direct interaction with trainers, helping address real-time challenges within your organization.",
  },
];
