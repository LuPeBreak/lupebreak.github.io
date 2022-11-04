import React from "react";

export default function TechCard({img, title}) {
  return (
    <div className="rounded p-4 bg-brand-cardBg shadow-md shadow-brand-shadow hover:scale-110 duration-500">
      <img src={img} alt={"logo " + title} className="w-20 mx-auto" />
      <p className="mt-4 mb-2 uppercase">{title}</p>
    </div>
  );
}
