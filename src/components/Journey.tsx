import { FaTools, FaUsers } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";

const steps = [
  {
    icon: <FaTools size={38} />,
    step: "STEP 1",
    title: "BUILD YOUR TEAM",
  },
  {
    icon: <GiIndiaGate size={38} />,
    step: "STEP 2",
    title: "COMPETE ACROSS INDIA",
  },
  {
    icon: <MdEmojiEvents size={38} />,
    step: "STEP 3",
    title: "EARN NATIONAL RANKING & VALUE",
  },
  {
    icon: <FaUsers size={38} />,
    step: "STEP 4",
    title: "JOIN THE LEAGUE",
  },
];

const Journey = () => {
  return (
    <section className="relative min-h-[520px] bg-black text-white py-24">
      <div className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div style={{paddingTop:"20px"}}></div>
        <p className="text-red-500 uppercase text-lg font-semibold text-center tracking-wider">
          USER JOURNEY
        </p>

        <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide text-center uppercase mt-3">
          YOUR PATH TO THE LEAGUE
        </h2>

        <p className="text-gray-500 text-center mt-4 mb-24">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative"
        style={{marginTop:"50px",marginLeft:"20px",marginRight:"20px"}}>

          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[72px] left-[68%] w-[85%] h-[2px] bg-blue-700"></div>
              )}

              {/* Circle */}
              <div className="w-32 h-32 rounded-full bg-[#2b2b2b] flex items-center justify-center relative z-10"
              >
                <div className="w-24 h-24 rounded-full border-[3px] border-blue-700 flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-[2px] h-8 bg-gray-500"></div>

              <p className="mt-3 text-red-500 font-semibold text-lg uppercase">
                {item.step}
              </p>

              <h3 className="mt-3 text-xl font-semibold uppercase leading-tight whitespace-pre-line max-w-[220px]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Journey;