import { Briefcase } from "lucide-react";
import { portfolioConfig } from "../../config/portfolio";
import Carousel, { CarouselItem } from "../components/Carousel";
import { useResponsiveBaseWidth } from "../components/ResponsiveBaseWidth";
import { Section, SectionTitle } from "../components/Section";

const DragIndicator = () => (
  <div className="flex justify-center mt-6 sm:mt-10">
    <div className="w-14 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

export const Experience = () => {
  const { experience } = portfolioConfig;

  const baseWidth = useResponsiveBaseWidth();

  // Map experience to carousel format
  const carouselItems: CarouselItem[] = experience.map((job, index) => ({
    id: index,
    title: `${job.role} @ ${job.company}`,
    description: job.achievements.join(", "),
    icon: (
      <Briefcase className="h-[16px] w-[16px] text-white dark:text-gray-700" />
    ),
  }));

  return (
    <Section
      id="experience"
      className="bg-white dark:bg-gray-900 relative overflow-visible 
                 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] 
                 lg:min-h-[900px] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <SectionTitle subtitle="My professional journey">
        Work Experience
      </SectionTitle>

      <div className="flex justify-center items-center py-8 sm:py-12 md:py-14">
        <Carousel items={carouselItems} baseWidth={baseWidth} round={false} />
      </div>

      <DragIndicator />
    </Section>
  );
};
