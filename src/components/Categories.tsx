import { MdEngineering } from "react-icons/md";
import { FaLightbulb, FaRobot, FaBrain } from "react-icons/fa";

const categories = [
  {
    title: "MINI\nMAKERS",
    description: "Where Creativity Meets Logic.",
    icon: <MdEngineering size={55} />,
    active: true,
  },
  {
    title: "JUNIOR\nINNOVATORS",
    description: "Engineering & Strategy Fundamentals.",
    icon: <FaLightbulb size={55} />,
    active: false,
  },
  {
    title: "YOUNG\nENGINEERS",
    description: "Advanced Wireless & Autonomous Control.",
    icon: <FaRobot size={55} />,
    active: false,
  },
  {
    title: "ROBO\nMINDS",
    description: "Elite Professional Sports & Robotics.",
    icon: <FaBrain size={55} />,
    active: false,
  },
];

const Categories = () => {
  return (
    <section className="relative h-[620px] bg-[#1b1b1b] text-white py-24">
      <div className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div style={{paddingTop:"50px"}}></div>
        <h2 className="text-4xl lg:text-5xl font-bold uppercase mb-14">
          Categories
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6"
        style={{marginTop:"40px",marginLeft:"20px",marginRight:"20px",marginBottom:"80px"}}>

          {categories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                category.active
                  ? "border border-yellow-500 bg-[#2a2926]"
                  : "border border-gray-700 bg-[#262626]"
              }`}
            >
              {/* Icon */}
              <div className="text-yellow-400 mb-8">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold uppercase whitespace-pre-line leading-tight">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-relaxed">
                {category.description}
              </p>

              {/* Learn More */}
              <button className="mt-10 text-red-500 uppercase font-semibold tracking-wide hover:text-red-400 transition">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;