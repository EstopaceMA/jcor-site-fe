import sundayService from "/assets/images/sunday-service.jpeg";
import prayerMeeting from "/assets/images/prayer-meeting.jpeg";
import youthBs from "/assets/images/youth-bs.jpeg";

export const SchedulesSection = () => {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12 text-center">
        <h1 className="text-4xl font-bold">Schedules</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mx-16 md:mx-32 justify-evenly items-center text-center md:text-left reveal">
        <div>
          <div>
            <p className="text-3xl font-medium mt-7 md:mt-0">
              Sunday Service (9am - 12pm)
            </p>
          </div>

          <p className="mt-3 mr-0 md:mr-32 mb-20 text-xl text-[#7c8595]">
            Let us worship the Lord together with our family and friends as we
            listen to the word of God and sing praises.
          </p>
        </div>

        <img
          className=" md:w-4/12 rounded-xl drop-shadow-xl"
          src={sundayService}
        />
      </div>
      <div className="lg:mt-20 lg:mt-20 flex flex-col-reverse lg:flex-row-reverse mx-16 md:mx-32 items-center text-center md:text-left reveal">
        <div className="ml-0 lg:ml-10">
          <div>
            <p className="text-3xl font-medium mt-7 md:mt-0">
              Prayer Meeting (Wednesday, 7pm - 9pm)
            </p>
          </div>

          <p className="mt-3 mr-0 md:mr-32 mb-20 text-xl text-[#7c8595]">
            Prayer is the most powerful tool we have to connect with God. The
            power of prayer grows if shared amongst the congregation. Let's
            share God's message and build strong relationships.
          </p>
        </div>

        <img
          className=" md:w-4/12 rounded-xl drop-shadow-xl"
          src={prayerMeeting}
        />
      </div>
      <div className="lg:mt-20 flex flex-col-reverse lg:flex-row mx-16 md:mx-32 justify-evenly items-center text-center md:text-left reveal">
        <div>
          <div>
            <p className="text-3xl font-medium mt-7 md:mt-0">
              Youth Bible Study (Thursday, 7pm - 9pm)
            </p>
          </div>

          <p className="mt-3 mr-0 md:mr-32 mb-20 text-xl text-[#7c8595]">
            Grow spiritually with the youth as we study and share the word of
            God.
          </p>
        </div>

        <img className="md:w-4/12 rounded-xl drop-shadow-xl" src={youthBs} />
      </div>
    </>
  );
};
