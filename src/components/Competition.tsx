import tournamentBracket from "../assets/images/tournament-bracket.png";

const upcomingEvents = [
  {
    city: "Event in Mumbai",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    city: "Event in Delhi",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

const pastEvents = [
  "Bengaluru Regionals",
  "Bengaluru Regionals",
  "Bengaluru Regionals",
];

const Competition = () => {
  return (
    <section className="relative -min-h-[720px] bg-[#161616] text-white  py-24">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[180px] rounded-full"
      style={{paddingTop:"60px"}}></div>

      <div className="relativex w-full px-8 lg:px-16">
      

        {/* Heading */}
        <div style={{paddingTop:"60px"}}></div>
        <h2 className="mt-8 text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-12"
        style={{marginBottom:"50px",marginLeft:"50px"}}>
          Competitions & Events
        </h2>

        {/* Column Titles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">

          <h3 className="text-red-500 text-xl font-semibold uppercase tracking-wide"
          style={{marginBottom:"20px",marginLeft:"50px"}}>
            Live Now
          </h3>

          <h3 className="text-xl font-semibold uppercase tracking-wide"
           style={{marginBottom:"20px",marginLeft:"50px"}}>
            Upcoming
          </h3>

          <h3 className="text-xl font-semibold uppercase tracking-wide"
          style={{marginBottom:"20px",marginLeft:"50px"}}>
            Past Results
          </h3>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        style={{marginBottom:"50px",marginLeft:"30px"}}>

          {/* Live Card */}
          <div className="bg-[#1d1d1d] border border-gray-700 rounded-2xl p-8 shadow-lg h-[500px]">

            <div className="flex justify-between items-start">

              <div>
                <h3 className=" text-2xl font-semibold">
                  Bengaluru Regionals
                </h3>

                <p className="text-gray-500 mt-1">
                  Lorem Ipsum
                </p>
              </div>

              <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full">
                Ongoing
              </span>

            </div>

            <hr className="border-gray-700 my-6" />

            <img
              src={tournamentBracket}
              alt="Tournament Bracket"
              className="w-full mt-4 rounded-lg object-cover"
            />

          </div>

          {/* Upcoming */}
          <div className="flex flex-col gap-6 justify-center"
          style={{marginBottom:"50px"}}>

            {upcomingEvents.map((event) => (
              <div
                key={event.city}
                className="bg-[#1d1d1d] border border-gray-700 rounded-2xl p-6 shadow-lg"
              >

                <h3 className="text-2xl font-semibold mb-5"
                style={{marginTop:"20px"}}>
                  {event.city}
                </h3>

                <div className="grid grid-cols-3 gap-4 text-sm">

                  <div>
                    <p className="text-gray-400"
                    style={{marginTop:"20px"}}>
                      Date
                    </p>
                    <p>{event.date}</p>
                  </div>

                  <div>
                    <p className="text-gray-400"
                    style={{marginTop:"20px"}}>
                      Location
                    </p>
                    <p>{event.location}</p>
                  </div>

                  <div>
                    <p className="text-gray-400"
                    style={{marginTop:"20px"}}>
                      Category
                    </p>
                    <p>{event.category}</p>
                  </div>

                </div>

                <button className="w-[500px] mt-6 bg-red-500 hover:bg-red-600 transition py-2.5 rounded-md font-semibold uppercase tracking-wide"
                style={{marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}}>
                  Register
                </button>

              </div>
            ))}

          </div>

          {/* Past Results */}
          <div className="bg-[#1d1d1d] border border-gray-700 rounded-2xl p-8 shadow-lg h-[500px]">

            {pastEvents.map((event, index) => (
              <div key={index}
              style={{marginBottom:"20px"}}>
                <div style={{paddingTop:"40px"}}></div>
                <h3 className="text-2xl font-semibold"
                style={{marginLeft:"20px"}}>
                  {event}
                </h3>

                <p className="text-gray-500 mt-1"
                style={{marginLeft:"20px"}}>
                  Lorem Ipsum
                </p>

                {index !== pastEvents.length - 1 && (
                  <hr className="border-gray-700 my-6" />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Competition;