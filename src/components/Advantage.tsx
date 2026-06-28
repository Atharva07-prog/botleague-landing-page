import leaderboard from '../assets/images/leaderboard.jpeg';
import { FaMedal, FaGavel, FaBriefcase, FaBolt } from "react-icons/fa";

const advantages = [
  {
    icon: <FaMedal />,
    title: "NATIONAL RECOGNITION",
    description: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: <FaGavel />,
    title: "FAIR JUDGING",
    description: "Compete with confidence under standardized, expert evaluation.",
  },
  {
    icon: <FaBriefcase />,
    title: "CAREER OPS",
    description: "Bridge the gap between arena victories and top-tier placements.",
  },
  {
    icon: <FaBolt />,
    title: "HIGH - ENERGY ECO",
    description: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

const Advantage = () => {
  return (
    <section className="relative h-[720px] w-[1700px] bg-[#1b1b1b] text-white py-24">
      <div className="w-full px-8 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>
            <div style={{paddingTop:"80px"}}></div>
            <p className="text-red-500 uppercase text-xl font-semibold tracking-[3px]"
            style={{marginBottom:"20px",marginLeft:"50px"}}>
              WHY REGISTER ?
            </p>

            <h2 className="text-[30px] lg:text-[36px] font-bold uppercase leading-none mt-3 mb-14"
            style={{marginBottom:"20px",marginLeft:"50px"}}>
            
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="space-y-10">
              {advantages.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">

                  <div className="text-red-500 text-4xl mt-1"
                  style={{marginLeft:"50px",marginTop:"20px"}}>
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold uppercase "
                    style={{marginLeft:"30px",marginTop:"20px"}}>
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mt-2 max-w-lg"
                    style={{marginLeft:"30px",marginTop:"20px"}}>
                      "{item.description}"
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end"
          style={{marginTop:"50px",marginRight:"50px"}}>

            <img
              src={leaderboard}
              alt="Leaderboard"
              className="w-full max-w-[380px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Advantage;