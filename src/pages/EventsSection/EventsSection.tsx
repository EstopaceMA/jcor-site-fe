export const ScheduleSection = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12 text-center">
        <h1 className="text-3xl">Events and Ministries</h1>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ zIndex: "-1" }}
          >
            <article className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="fb-video"
                data-href="https://fb.watch/f7b3bhu7_W/"
                data-width="auto"
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://fb.watch/f7b3bhu7_W/"
                    target={"_blank"}
                  >
                    5th Anniversary
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">06/13/22</p>
              </header>
            </article>
          </div>

          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
            style={{ zIndex: "-1" }}
          >
            <article className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="fb-video"
                data-href="https://fb.watch/f7coQLnDNv/"
                data-width="auto"
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://fb.watch/f7coQLnDNv/"
                    target={"_blank"}
                  >
                    EMC Laguna Youth Camp
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">04/24/22</p>
              </header>
            </article>
          </div>

          <div
            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            style={{ zIndex: "-1" }}
          >
            <article className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div
                className="fb-video"
                data-href="https://fb.watch/f7cAjmTPg8/"
                data-width="auto"
              />

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://fb.watch/f7cAjmTPg8/"
                    target={"_blank"}
                  >
                    VOG 4th Year Anniversary
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
