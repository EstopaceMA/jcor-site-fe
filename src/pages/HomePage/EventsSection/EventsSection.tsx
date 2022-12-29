import { events } from "./events";

export const EventsSection = () => {
  return (
    <>
      <div className="container md:my-12 mx-auto px-4 md:px-12 text-center">
        <h1 className="text-4xl">Events and Ministries</h1>
      </div>
      <div className="container my-12 mx-auto px-12 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {events.map((event) => (
            <div
              key={event.link}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <article className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div
                  className="fb-video"
                  data-href={event.link}
                  data-width="auto"
                />

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href={event.link}
                      target={"_blank"}
                    >
                      {event.name}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">{event.date}</p>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
