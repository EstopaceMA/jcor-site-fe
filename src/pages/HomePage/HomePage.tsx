import {
  Section,
  HomeSection,
  HomeContentContainer,
  Button,
} from "./Homepage.style";
import { Navigation } from "../../components/Nav";

export const HomePage = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Section>
          <HomeSection>
            <HomeContentContainer>
              <p style={{ color: "#fff" }}>WELCOME TO OUR CHURCH</p>
              <p style={{ fontSize: "64px", color: "#fff" }}>BECOME PART OF</p>
              <p style={{ fontSize: "64px", color: "#fff" }}>OUR COMMUNITY</p>
              <Button>LEARN MORE</Button>
            </HomeContentContainer>
          </HomeSection>
        </Section>
        <Section>
          <h1>Ministries</h1>
        </Section>
        <Section>
          <h1>About</h1>
        </Section>
      </div>
    </div>
  );
};
