import { Link } from "react-router-dom";

import { Section } from "./Homepage.style";
import { Navigation } from "../../components/Nav";

export const HomePage = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Section>
          <h1>Home</h1>
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
