import React from "react";

const Home = () => {
  return (
    <div className="grid gap-4 max-w-5xl p-4 sm:grid-cols-2 md:grid-cols-4 ">
      <h1 className="text-4xl font-extrabold sm:col-span-2  sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:col-span-3 md:text-5xl ">
        <span className="bg-yellow-200 md:col-span-2 ">
          Grid Layout with Tailwind css
        </span>
      </h1>
      <p className="sm:row-start-2 sm:col-start-2 self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, in?
        Eaque aperiam ipsum quas cumque, voluptatem aliquid laudantium maxime
        similique praesentium. Repudiandae vel ratione, et fugit placeat nihil
        incidunt minima.
      </p>
      <div className="bg-blue-500 h-auto sm:square"></div>
      <div className="bg-blue-500 h-auto sm:square"></div>
      <div className="bg-pink-500 h-auto sm:square"></div>
      <div className="bg-blue-500 h-auto sm:square md:col-start-2"></div>
      <div className="bg-pink-500 h-auto sm:square"></div>
      <div className="bg-blue-500 h-auto sm:square"></div>

      <div className="bg-blue-500 h-auto sm:square"></div>
      <div className="bg-pink-500 h-auto sm:square"></div>
      <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        architecto incidunt aperiam nam cum rerum.
      </p>
    </div>
  );
};

export default Home;
