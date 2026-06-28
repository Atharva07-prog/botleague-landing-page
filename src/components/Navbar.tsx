import botleagueLogo from '../assets/images/botleaguelogo.png';

const Navbar = () => {
    const menuItems = [{'name': 'Events', 'active': true}, {'name': 'Programs', 'active': false}, {'name': 'Community', 'active': false}, {'name': 'Ranks', 'active': false}];
  return (
    <nav className="h-13 w-full bg-[#111111] border-b border-gray-800">
      <div className="w-full flex items-center justify-between px-10 lg:px-16 py-4">

        {/* Logo */}
        <div className="pl-4">
       <img
          src={botleagueLogo}
          alt="BotLeague Logo"
          className="h-13 w-auto object-contain cursor-pointer"
        />
        </div>

        {/* Navigation */}
        
        
        <ul className=" flex items-center gap-10 ml-16 ">

          {menuItems.map((item) => (
            <li key={item.name} className="relative font-orbitron cursor-pointer text-[18px] font-medium tracking-wide hover:text-red-500 transition-colors">
              {item.name}
              {item.active && (
                <span className ="absolute -bottom-2 left-0 w-full h-[2px] bg-red-500"></span>)}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="w-auto flex items-center gap-6 ml-auto">

          <button className=" w-26 border border-gray-500 px-6 py-4 rounded text-[16px] hover:border-red-500">
            Login
          </button>

          <button className="w-28 bg-red-600 hover:bg-red-700 px-6 py-4 rounded text-[16px] font-medium">
            Register Now
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
          
