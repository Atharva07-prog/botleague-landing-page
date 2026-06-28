import heroBanner from "../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[620px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex items-center px-10 lg:px-16">

        <div className="max-w-[700px]"
        style={{marginLeft:"50px",fontFamily:"'Orbitron', sans-serif",border:"2px "}}>
          
          

          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 bg-black/70 border border-red-500 rounded-md px-4 py-2 mb-8">
            <span className="text-red-500 text-xs">●</span>
            <span className="text-sm font-medium tracking-wide">
              LIVE
            </span>
          </div>

          {/* Heading */}
          <h1 className=" text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mt-6 max-w-xl">
            Build. Compete. Rank.
            <br />
            The National Ecosystem for Robotics Arena
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5"
          style={{marginTop:"30px"}}>

            <button className="w-48 h-12 bg-red-600 hover:bg-red-700 transition-colors py-3 rounded-md font-medium uppercase">
              Create Account
            </button>

            <button className="w-48 h-12 border border-white hover:bg-white hover:text-black transition-colors py-3 rounded-md font-medium uppercase">
              Explore Events
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;