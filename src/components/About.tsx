import botleagueInfo from "../assets/images/botleague-info.png";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    description: "From one-off events to a year-round competitive season.",
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    description: "Your professional robotics legacy, tracked and verified.",
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    description: "Benchmark your skills against the best engineers in India.",
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    description: "Turning arena victories into real-world industry opportunities.",
  },
];

const About = () => {
  return (
    <section className="relative h-[620px] bg-[#1b1b1b] text-white py-24">
      <div className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div style={{paddingTop:"50px"}}></div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase mb-16"
        style={{marginLeft:"50px"}}>
          What is Botleague?
        </h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-20 items-center">

          {/* Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">

            {features.map((feature) => (
              <div key={feature.number}>
                <h3 className="text-red-500 text-4xl font-bold"
                style={{marginLeft:"20px"}}>
                  {feature.number}
                </h3>

                <h4 className="mt-3 text-3xl font-semibold uppercase leading-tight"
                style={{marginLeft:"25px"}}>
                  {feature.title}
                </h4>

                <p className="mt-4 text-gray-400 text-lg leading-relaxed"
                style={{marginLeft:"25px"}}>
                  "{feature.description}"
                </p>
              </div>
            ))}

          </div>

          {/* Right */}
          <div className="flex justify-end"
          style={{marginRight:"70px"}}>

            <img
              src={botleagueInfo}
              alt="Botleague Overview"
              className="w-full max-w-[420px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;