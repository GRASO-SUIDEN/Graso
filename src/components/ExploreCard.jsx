import { useState } from "react";
import Usdt from "./assets/usdt.png";
import LocationIcon from "./assets/locationIcon.png";

export default function ExploreCard() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-[#acabab6b] to-[#ebc67e] h-[30rem] w-[20rem]  pt-2 rounded-xl border-1 border-white">
        <Head />
        <Body />
      </div>
    </>
  );
}

function Head() {
  return (
    <div className="flex pl-[1rem]">
      <div>
        <div role="img" className="bg-gray-300 h-[5rem] w-[5rem]">
          Image
        </div>

        <div className="flex space-x-3 mt-2">
          <p className="text-white">HOLA</p>{" "}
          <p className="text-[#BB964B] bg-[#D9D9D9] h-[1.5rem] w-[4rem] text-center pt-[0.1rem] text-[0.8rem] rounded-xl">
            PUBLIC
          </p>
        </div>

        <p className="flex text-white">
          {" "}
          <img src={LocationIcon} alt="Location Icon" />{" "}
          <span>Lagos, Nigeria</span>
        </p>
      </div>

      <div className="flex space-x-4 text-[0.8rem] h-[2rem]">
        <p className="text-[#05AA6B] bg-[#8F9869] h-[1.5rem] w-[3rem] text-center  rounded-xl ">
          Live
        </p>
        <p className="text-[#BB964B] bg-[#D9D9D9] h-[1.5rem] w-[5rem] text-center rounded-xl">
          Refundable
        </p>
      </div>
    </div>
  );
}

function Body() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quaerat exercitationem molestiae molestias, nobis consequatur fuga, iste ut quae earum cumque laudantium provident. Hic excepturi ex dignissimos quo velit reiciendis, consequatur quod odio, vitae tenetur optio magnam a cumque ad vero veritatis nobis repellat, assumenda esse magni sit? Quidem, dolor molestiae accusamus ad blanditiis atque obcaecati at magni dignissimos, maiores maxime? Magni quas omnis quae consequatur at vitae excepturi doloribus, officia voluptas vero alias quasi inventore. Nemo facere fuga quos porro, perspiciatis exercitationem error distinctio nobis eos quia amet culpa dolores odio! Aperiam laborum delectus ipsam pariatur blanditiis eius itaque.";
  const collapsedText = fullText.split(" ").slice(0, 30).join(" ");

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full pl-[1rem]">
      <div
        className={`text-[0.8rem] max-h-[8rem] text-[#4B4A4A] overflow-y-auto transition-all scroll-m-0 ${
          isExpanded ? "h-40" : "h-auto"
        }`}
      >
        <p>
          {isExpanded ? fullText : `${collapsedText}...`}{" "}
          <span
            onClick={toggleReadMore}
            role="button"
            className="font-bold text-black"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </p>
      </div>

      <div className="flex items-center space-x-6 bg-gradient-to-r from-[#e9d995] to-[#FFFFFF] pl-[1.5rem] pt-2 w-[20rem] h-[3.5rem] -ml-[1rem]">
        <p className="text-[#BB964B] text-[0.85rem]">Targeted Raise</p>
        <p className="flex justify-center items-center space-x-2">
          <img src={Usdt} alt="Usdt" />
          <span>200,000</span>
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <div className="flex flex-col items-center -space-y-3">
          <p className="text-[#471B1A] text-[0.75rem]">Min Entry</p>
          <p className="text-white">5 USDT</p>
        </div>
        <div className="bg-white h-[2rem] w-[0.1rem]"></div>
        <div className="flex flex-col -space-y-3">
          <p className="text-[#471B1A] text-[0.75rem]">Max Entry</p>
          <p className="text-white">10,000 USDT</p>
        </div>
      </div>
      <button className="absolute bottom-0 text-white bg-gradient-to-r from-[#D9D9D96B] to-[#7373736B] w-[19.9rem] h-[3rem] mt-[1rem] -ml-[1rem] rounded-[0_0_0.75rem_0.75rem] border-t border-white">
        INVEST
      </button>
      <div className="absolute -bottom-[2.6rem] flex justify-center text-center ml-5 space-x-3 bg-[#24C2A5] w-[15rem] text-white rounded-[0_0_0.75rem_0.75rem]">
        <p>Ends in</p>
        <p>60D 7H 35M 59S</p>
      </div>
    </div>
  );
}
