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
import { Navbar } from "../../components/Nav/Navbar";
import { Header } from "./Header";
import { Footer } from "../../components/Footer";
import { ScheduleSection } from "../EventsSection";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Header />
      </Section>
      <ScheduleSection />
      <Footer />
    </>
  );
};
