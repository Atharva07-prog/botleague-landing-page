import sponsor1 from "../assets/images/sponsor1.png"
import sponsor2 from "../assets/images/sponsor2.png";
import sponsor3 from "../assets/images/sponsor3.png";
import sponsor4 from "../assets/images/sponsor4.png";
import sponsor5 from "../assets/images/sponsor5.png";
import sponsor6 from "../assets/images/sponsor6.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.jpg";
import twitter from "../assets/images/twitter.png";

const ecosystemCards = [
  {
    title: "BECOME A JUDGE",
    description:
      "Share your expertise, evaluate the nation's top robotics talent and help shape the future of engineering.",
    button: "APPLY NOW",
  },
  {
    title: "VOLUNTEER",
    description:
      "Join our event crew, gain valuable experience and contribute to India's largest robotics league.",
    button: "JOIN US",
  },
  {
    title: "COMMUNITY MEMBER",
    description:
      "Become a part of the BotLeague community and stay connected with events, rankings and opportunities.",
    button: "JOIN COMMUNITY",
  },
];
const sponsors = [
   { logo :sponsor1,
    name :"NIT Delhi",
   },

   { logo :sponsor2,
    name :"INDIAN BIT",
   },

   { logo :sponsor3,
    name :"NIT SILCHAR",
   },

   { logo :sponsor4,
    name :"ROBO COMPANY",
   },

   { logo :sponsor5,
    name :"IIT Bombay",
   },
   { logo :sponsor6,  
    name :"ROBO COMPANY",
   }
  ];
 

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Join The Ecosystem */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16"
        style={{marginLeft:"50px"}}>

          {/* Heading */}
          <div style={{paddingTop:"50px"}}></div>
          <p className="text-red-500 uppercase text-[22px] font-semibold tracking-[3px]"
          >
            JOIN THE ECOSYSTEM
          </p>

          <h2 className="text-[40px] font-bold uppercase leading-none mt-3 mb-16">
            HELP BUILD INDIA'S
            <br />
            ROBOTICS FUTURE
          </h2>

          {/* Cards */}
          <div className="h-[300px] grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
          style={{marginTop:"40px",marginLeft:"20px",marginRight:"20px"}}>

            {ecosystemCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1b1b1b] border border-gray-700 rounded-xl p-6 flex flex-col w-full max-w-[300px] mx-auto
                "
              >
               <h3 className="text-[20px] font-semibold uppercase mb-5 whitespace-pre-line tracking-wide"
                style={{marginTop:"20px",marginLeft:"50px"}}>
  {card.title}
</h3>

<div className="space-y-3"
style={{marginTop:"20px",marginLeft:"5px"}}>

  <input
    type="text"
    placeholder="Name"
    className="w-36 h-9 bg-[#252525] border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500"
    style={{marginLeft:"70px",marginBottom:"20px"}}
  />

  <input
    type="text"
    placeholder="Location"
    className="w-36 h-9 bg-[#252525] border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500"
    style={{marginLeft:"70px",marginBottom:"20px"}}
  />

  <input
    type="text"
    placeholder="Enroll"
    className="w-36 h-9 bg-[#252525] border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-red-500"
    style={{marginLeft:"70px",marginBottom:"20px"}}
  />

</div>

<button className="w-36 h-9 mt-6 bg-red-500 hover:bg-red-600 transition py-3 rounded-md font-semibold uppercase tracking-wide"
style={{marginBottom:"20px",marginLeft:"75px"}}>
  SIGN UP
</button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Sponsors */}
<section className="relative min-h-[500px] pb-20">
  <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
            <div style={{paddingTop:"100px"}}></div>
   <h3 className="text-[26px] uppercase font-semibold tracking-wide mb-10"
   style={{marginBottom:"20px",marginLeft:"75px"}}>
  Sponsors
</h3>
   <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-20 mt-8">

      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="flex justify-center items-center "
          style={{paddingTop:"20px",marginRight:"60px"}}>
        
        
          <img
            src={sponsor.logo}
            alt={sponsor.name}
           className="h-20 w-28 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        <span className="text-gray-300 text-xl font-medium uppercase">{sponsor.name}</span>
        </div>
      ))}

    </div>

  </div>
</section>

{/* Quick Links */}
<section className="border-t border-gray-700 mt-16 pt-12 pb-12">
  <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

    <div className="flex flex-col md:flex-row justify-between">

      {/* Left */}
      <div>
        <div style={{paddingTop:"50px"}}></div>
        <h3 className="text-[26px] font-semibold uppercase mb-8"
        style={{marginBottom:"20px",marginLeft:"50px"}}>
          QUICK LINKS
        </h3>

        <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-gray-400 text-lg"
        style={{marginBottom:"20px",marginLeft:"50px"}}>

          <a href="#" className="hover:text-white">The Arena</a>
          <a href="#" className="hover:text-white">Join the Team</a>

          <a href="#" className="hover:text-white">Episodes</a>
          <a href="#" className="hover:text-white">Sponsorships</a>

          <a href="#" className="hover:text-white">National Rankings</a>
          <a href="#" className="hover:text-white">Help Center</a>

          <a href="#" className="hover:text-white">Programs</a>
          <a href="#" className="hover:text-white">Contact Us</a>

          <a href="#" className="hover:text-white">Rulebooks</a>
          <a href="#" className="hover:text-white">Legal</a>

        </div>

      </div>

      {/* Right */}
      <div className="mt-12 md:mt-0">
        <div style={{paddingTop:"50px"}}></div>
        <h3 className="text-[26px] font-semibold uppercase mb-8"
        style={{marginBottom:"20px",marginRight:"200px"}} >
          SOCIAL MEDIA
        </h3>

        <div className="flex gap-8">

          <img
            src={youtube}
            alt="YouTube"
            className="w-9 h-9 opacity-70 hover:opacity-100 cursor-pointer transition"
          />

          <img
            src={instagram}
            alt="Instagram"
            className="w-9 h-9 opacity-70 hover:opacity-100 cursor-pointer transition"
          />

          <img
            src={facebook}
            alt="Facebook"
            className="w-9 h-9 opacity-70 hover:opacity-100 cursor-pointer transition"
          />

          <img
            src={twitter}
            alt="Twitter"
            className="w-9 h-9 opacity-70 hover:opacity-100 cursor-pointer transition"
          />

        </div>

      </div>

    </div>

  </div>
</section>

    </footer>
  );
};

export default Footer;