import React from "react";
import Nav from "../Components/Nav";
import classNames from "classnames";

const Home = () => {
  return (
    <section id="home" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <Nav />
        <div className={classNames(subDiv)}>
          <h1 className={classNames(h1Tag)}>
            <span className={classNames(spanTag)}>We Fight</span> For Your Right
          </h1>
          <p className={classNames(pTag)}>We Help You Protect What's Yours.</p>
          <button className={classNames(btnClass)}>FREE CONSULTATION</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

const sectionClass =
  " bg-[url('./Images/lawhammer.jpg')] h-[100vh] w-full bg-cover bg-no-repeat ";
const divClass = "backdrop-blur-xl w-full h-full lg:backdrop-blur-0";
const subDiv =
  "flex flex-col justify-center items-start lg:fixed lg:right-0 flex-wrap px-8 lg:w-[50%] h-[70%] font-serif ";
const h1Tag = "text-7xl font-extrabold py-2 text-zinc-800 ";
const pTag =
  "text-xl tracking-widest font-[600] font-sans px-2 py-4 text-zinc-900";
const spanTag = "text-amber-600";
const btnClass =
  "font-sans mx-4 bg-amber-600 rounded-full px-6 py-4 font-medium text-white text-sm hover:bg-amber-700";
