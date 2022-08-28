import {
  Section,
  HomeSection,
  HomeContentContainer,
  Button,
  AboutSection,
  AboutSectionContainer,
  AboutSectionHeadline,
  Headline,
  SubHeadline,
  AboutSectionContentContainer,
  AboutCard,
} from "./Homepage.style";
import { Header } from "./Header";
import { ScheduleSection } from "../EventsSection";

export const HomePage = () => {
  return (
    <>
      <Section>
        <Header />
      </Section>
      <ScheduleSection />
    </>
  );
};
