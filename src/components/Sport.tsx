import roboRace from "../assets/images/robo-race.jpeg";
import lineFollower from "../assets/images/line-follower.jpeg";
import rcRacing from "../assets/images/rc-racing.jpeg";
import drone from "../assets/images/drone.jpeg";
import roboHockey from "../assets/images/robo-hockey.jpeg";
import roboWar from "../assets/images/robo-war.jpeg";

const sports = [
  {
    title: "Robo Race",
    image: roboRace,
  },
  {
    title: "Line Follower",
    image: lineFollower,
  },
  {
    title: "RC Racing",
    image: rcRacing,
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: drone,
  },
  {
    title: "Robo Hockey",
    image: roboHockey,
  },
  {
    title: "Robo War",
    image: roboWar,
  },
];

const Sport = () => {
  return (
    <section className="relative min-h-[1000px] bg-black text-white py-24">
      <div className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div style={{paddingTop:"80px"}}></div>
        <p className="text-red-500 uppercase text-[28px] font-semibold tracking-[4px]">
          SPORTS
        </p>

        <h2 className="text-[40px] font-bold uppercase mt-2 mb-12">
          COMPETITION DISCIPLINES
        </h2>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        style={{marginTop:"40px",marginLeft:"10px",marginRight:"20px",marginBottom:"80px"}}>

          {sports.map((sport, index) => (
            <div
              key={index}
              className={`bg-[#1d1d1d] rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0
                  ? "border-yellow-500"
                  : "border-gray-700 hover:border-red-500"
              }`}
            >
              {/* Image */}
              <img
                src={sport.image}
                alt={sport.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="h-[88px] flex items-center justify-center px-4">
                <h3
                  className={`text-center font-semibold leading-tight ${
                    sport.title.length > 22
                      ? "text-lg"
                      : "text-[22px]"
                  }`}
                >
                  {sport.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Sport;