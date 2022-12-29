import { HeaderSection } from "./HeaderSection/HeaderSection";
import { EventsSection } from "./EventsSection";
import { SchedulesSection } from "./SchedulesSection";

export const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <SchedulesSection />
      <EventsSection />
    </>
  );
};
