import { NavLink } from "react-router-dom";
import Footer from "../../components/banner/footer/footer";
import Header from "../../components/banner/header/header";
import ExploreCard from "../../components/ExploreCard";
import MobileNav from "../../components/MobileNav";

function Explore() {
  return (
    <section className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <MobileNav>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>Portfolio</li>
        <li>Whitepaper</li>
        <li>About us</li>
      </MobileNav>

      <div className="mt-[7rem] max-md:mt-2 flex-grow">
        <h2 className="ml-[6rem] max-md:ml-4 text-white text-[2rem] font-extrabold">
          Explore
        </h2>
        <ul className="flex ml-[4rem] max-md:ml-4 mt-3 space-x-5 text-white">
          <li className="font-bold">Live & Upcoming</li>
          <div className="h-[1.3rem] w-[0.1rem] bg-white"></div>
          <li className="font-thin">Completed</li>
        </ul>

        <div className="ml-6 flex space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-10 max-md:mt-5 max-md:ml-4 max-md:flex-wrap">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>

      {/* <Footer className="" /> */}
    </section>
  );
}

export default Explore;
