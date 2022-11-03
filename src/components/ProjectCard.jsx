import React from "react";

export default function ProjectCard({ title,img, link, codigo }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="shadow-lg shadow-brand-shadow group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl front-bold text-white tracking-wider">
          {title}
        </span>

        <div className="pt-8 text-center">
          <a href={link}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-pulse">
              Link
            </button>
          </a>
          {!codigo ? (
            ""
          ) : (
            <a href={codigo}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-pulse ">
                Codigo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
