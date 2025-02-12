import { HoverEffect } from "../ui/CardEffect";

export function Review() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-2xl font-bold text-[#ffc541] text-center mb-0 mt-14 sm:mt-4">
        The Glow-Up Your Model Deserves
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Logical Review of Financial Models",
    description:
      "We meticulously analyze your model for technical accuracy, logical flow, and adherence to industry best practices, ensuring every calculation stands up to scrutiny.",
  },
  {
    title: "PPA and Lender Document Compliance",
    description:
      "Our team reviews your model against Power Purchase Agreements (PPAs) and lender documents, ensuring compliance and consistency with contractual obligations.",
  },
  {
    title: "Adherence to FAST Standards",
    description:
      "We build and review models with strict adherence to FAST standards, promoting clarity, flexibility, and sustainability.",
  },
  {
    title: "Optimization & Enhancement",
    description:
      "Post-review, our experts refine your model with precision, introducing tailored functionalities and adjustments to align perfectly with your needs.",
  },
];
