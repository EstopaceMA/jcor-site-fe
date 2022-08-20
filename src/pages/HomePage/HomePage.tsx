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

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Header />
      </Section>
      <Section>
        <AboutSection>
          <AboutSectionContainer>
            <AboutSectionHeadline>
              <SubHeadline>SUB-HEADLINE</SubHeadline>
              <Headline>A CHURCH THAT'S RELEVANT</Headline>
            </AboutSectionHeadline>
            <AboutSectionContentContainer>
              <AboutCard></AboutCard>
              <AboutCard></AboutCard>
              <AboutCard></AboutCard>
            </AboutSectionContentContainer>
          </AboutSectionContainer>
        </AboutSection>
      </Section>
    </>
  );
};
