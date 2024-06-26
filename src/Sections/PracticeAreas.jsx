import classNames from "classnames";
import React from "react";
import { practiceAreas } from "../Components/Contants";

const PracticeAreas = () => {
  return (
    <section id="practiceareas" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <h2 className={classNames(h2Tag)}>
          Our <span className={classNames(spanTag)}>Practice Areas</span>
        </h2>
        <p className={classNames(pTag, " md:ml-8 py-4")}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in.
        </p>
        <p className={classNames(pTag, " md:ml-8 pb-4 ")}>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <button className="text-white rounded-full md:ml-8 px-6 py-4 text-xs font-medium bg-amber-600 hover:bg-amber-700">
          LEARN MORE
        </button>
      </div>
      <div className={classNames(divClass)}>
        {practiceAreas.map((item) => (
          <div className={classNames(subDivs, transitionDelay)}>
            <div className={classNames(icons)}>{item.icon}</div>
            <div className={classNames(pTag, "px-4")}>
              <p className={classNames(iconPTag)}>{item.title}</p>
              <p>{item.desp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;

const sectionClass =
  "bg-neutral-800 text-neutral-400 flex flex-row justify-evenly flex-wrap w-full font-sans p-8 ";
const divClass =
  "w-[500px] m-4 md:m-10 flex flex-col justify-center items-start ";
const h2Tag = "text-white tracking-tighter text-4xl md:text-6xl";
const pTag = "tracking-wide ";
const spanTag = "text-amber-600 font-bold";
const subDivs =
  "flex flex-row justify-center items-center py-4 cursor-pointer hover:translate-x-2";
const transitionDelay = "transition-all delay-150";
const icons = "p-4 mx-2 rounded-full bg-amber-600 text-white text-2xl";
const iconPTag = "text-amber-600 font-medium";
