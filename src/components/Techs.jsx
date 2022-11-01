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

export default function Techs() {
  return (
    <div name="techs" className="w-full h-screen bg-brand-background text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-brand-highlighted  ">
            Techs
          </p>
          <p className="py-4 font-semibold">
            <HiOutlineLightningBolt className="inline" /> Essas sao algumas das
            tecnologias que ja estudei, experimentei e gostei !
          </p>
        </div>

        {/* techs */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={ReactLogo} alt="logo react" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">React</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={HTML} alt="logo html" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">HTML</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={CSS} alt="logo CSS" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">CSS</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={Javascript} alt="logo Javascript" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">Javascript</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={Tailwind} alt="logo Tailwind" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">Tailwind</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={Node} alt="logo Node" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">Node</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={Mongo} alt="logo Mongo" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">Mongo</p>
          </div>

          <div className="p-4 shadow-md shadow-brand-shadow hover:scale-110 duration-500">
            <img src={Github} alt="logo Github" className="w-20 mx-auto" />
            <p className="mt-4 mb-2 uppercase">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
