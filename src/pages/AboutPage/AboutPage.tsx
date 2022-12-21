import ChurchHistory from "./history";

export const AboutPage = () => {
  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="text-5xl md:text-9xl font-bold -space-y-3 md:-space-y-10">
          <p>EVERYONE</p>
          <p className="ml-4">EVERYWHERE</p>
          <p>EVERYDAY</p>
        </div>
      </section>

      <p className="mx-5 md:mx-0 text-center text-3xl font-bold">Empowering people to use what God has given them to serve and love our world through relational disciple-making.</p>

      <section className="mt-32">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly">

          <img className="w-11/12 md:w-5/12" src="/assets/images/pastor_lheo.jpg"/>

          <div className="mt-10 w-11/12 md:w-6/12 text-center md:text-right">
            <p className="text-7xl font-bold">Meet our Lead Pastor</p>
            <p className="mt-2 text-xl">Pastor Lheo Bautista.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus orci, faucibus ut tempor semper, suscipit nec orci. Donec in lorem dui. In gravida lectus vel tempus eleifend. Sed dignissim sapien lectus, vehicula viverra libero tincidunt eget. Aliquam placerat porta justo eget elementum. Fusce vulputate eget arcu sed volutpat. Mauris iaculis rhoncus finibus. Nulla facilisi. Fusce aliquam libero ut sapien laoreet, et blandit dui facilisis. Fusce sit amet urna sit amet ex pharetra luctus. Morbi ultrices, sem at elementum mattis, nisi est ullamcorper nisl, vitae laoreet ex nisi at massa. Integer fermentum est nisl, ut pulvinar felis euismod ac.</p>
          </div>
        </div>
      </section>
      
      <section className="mx-10 mt-32 mb-32">
        <p className="text-5xl font-bold">History</p>

        <div className="mt-5">
          {ChurchHistory.map((history) => (
            <div className="mt-7">
              <p className="text-2xl font-bold">{history.title}</p>
              <p>{history.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-10 mt-32 mb-32">
        <p className="text-5xl font-bold">Mission and Vision</p>

        <div className="mt-5">
          <div className="mt-7">
            <p className="text-2xl font-bold">Mission</p>
            <p>Cras rutrum mollis odio. Curabitur ex magna, consequat id bibendum ac, efficitur eget nunc. Nunc elementum efficitur sodales. Quisque aliquam elit leo, ut vulputate ex rhoncus eget. Sed quis sollicitudin nisl. Mauris non libero rutrum, iaculis nibh ut, euismod dolor. Curabitur vel lacus faucibus, viverra dui in, accumsan est. Duis ac elit vitae leo tristique pellentesque sed sed orci. Nam tortor nisl, volutpat in mi non, fringilla gravida nisi. Pellentesque vitae dictum nunc. Sed bibendum quis ante id aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          
          <div className="mt-7">
            <p className="text-2xl font-bold">Vision</p>
            <p>Suspendisse nec vehicula ipsum. Proin at lorem vel arcu feugiat euismod. Suspendisse congue fermentum augue, quis sagittis turpis sollicitudin eget. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris dignissim erat lacus, a vehicula lectus auctor vitae. Etiam imperdiet dolor in libero ornare iaculis id nec nulla.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
