import Footer from "../../components/banner/footer/footer";
import Header from "../../components/banner/header/header";
import SideNav from "../../components/banner/sideNav/sidenav";
import ExploreCard from "../../components/ExploreCard";

function Explore() {
  return (
    <section className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <SideNav />
      <div className="mt-[7rem] flex-grow">
        <h2 className="ml-[6rem] text-white text-[2rem] font-extrabold">
          Explore
        </h2>
        <ul className="flex ml-[4rem] mt-3 space-x-5 text-white">
          <li className="font-bold">Live & Upcoming</li>
          <div className="h-[1.3rem] w-[0.1rem] bg-white"></div>
          <li className="font-thin">Completed</li>
        </ul>
        <div className="ml-6 flex space-x-5">
          <ExploreCard />
          {/* <ExploreCard />
          <ExploreCard /> */}
        </div>
      </div>
      {/* <Footer className="" /> */}
    </section>
  );
}

export default Explore;
