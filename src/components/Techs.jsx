import React from "react";

import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import Github from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { HiOutlineLightningBolt } from "react-icons/hi";
import TechCard from "./TechCard.jsx";

export default function Techs() {
  return (
    <div
      name="techs"
      className="w-full h-fit sm:h-screen my-6  bg-brand-background text-gray-300 "
    >
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-brand-highlighted  ">
            Techs
          </p>
          <p className="py-4 font-semibold">
            <HiOutlineLightningBolt className="inline" /> Essas sao algumas das
            tecnologias que ja estudei, experimentei e gostei!
          </p>
        </div>

        {/* techs */}
        <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-4">
          <TechCard img={ReactLogo} title="React" />

          <TechCard img={HTML} title="Html" />

          <TechCard img={CSS} title="CSS" />

          <TechCard img={Javascript} title="Javascript" />

          <TechCard img={Tailwind} title="Tailwind" />

          <TechCard img={Node} title="Node" />

          <TechCard img={Mongo} title="Mongo" />

          <TechCard img={Github} title="Github" />
        </div>
      </div>
    </div>
  );
}
