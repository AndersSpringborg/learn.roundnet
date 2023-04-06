import { Drill, DrillCategory, drills } from "../../data/localization";
import { useState } from "react";

const ParticipantLogo = ({ extra = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    height="30px"
    width="30px"
    viewBox="0 0 489.3 489.3"
    className={
      "-m-2 " +
      (extra
        ? "animate-pulse dark:fill-white fill:slate-300"
        : "fill-green-600")
    }
  >
    <g>
      <path d="M181.95,62.7c0,34.6,28.1,62.7,62.7,62.7s62.7-28.1,62.7-62.7S279.25,0,244.65,0S181.95,28.1,181.95,62.7z M244.65,24.5    c21.1,0,38.2,17.1,38.2,38.2s-17.1,38.2-38.2,38.2s-38.2-17.1-38.2-38.2S223.55,24.5,244.65,24.5z" />
      <path d="M196.25,138.5c-34.3,0-62.2,27.9-62.2,62.2v79.7c0,23,12.9,44,32.8,54.7v104.7c0,27.3,22.2,49.5,49.5,49.5h56.6    c27.3,0,49.5-22.2,49.5-49.5V335c19.9-10.7,32.8-31.7,32.8-54.7v-79.7c0-34.3-27.9-62.2-62.2-62.2h-96.8V138.5z M330.75,200.6    v79.7c0,15.7-9.9,29.9-24.7,35.3c-4.8,1.8-8,6.4-8,11.5v112.6c0,13.8-11.2,25-25,25h-56.6c-13.8,0-25-11.2-25-25V327.2    c0-5.1-3.2-9.7-8-11.5c-14.8-5.4-24.7-19.6-24.7-35.3v-79.8c0-20.8,16.9-37.7,37.7-37.7h96.8    C313.85,163,330.75,179.9,330.75,200.6z" />
    </g>
  </svg>
);
const DrillCard = ({ drill }: { drill: Drill }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);

  const variable_participants = drill.participants_max - drill.participants_min;

  return (
    <div
      className={
        "group cursor-pointer transform-gpu transition-all duration-500 [transform-style:preserve-3d] border border-gray-200 rounded-lg shadow-xl dark:border-gray-700 " +
        (isFlipped ? " [transform:rotateY(180deg)]" : "")
      }
      onClick={handleClick}
    >
      {/*Frontside*/}
      {
        <div className="absolute p-6 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800">
          <div className="flex flex-col h-full">
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {drill.name}
              </h5>
            </a>
            <p className="flex-grow mb-3 font-normal text-gray-500 dark:text-gray-400">
              {drill.purpose}
            </p>
            <div className="flex justify-between ">
              <div className="">
                <div className="py-2">
                  {drill.intensity === 1 && (
                    <span className="px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full dark:text-green-100 dark:bg-green-700">
                      Mild
                    </span>
                  )}
                  {drill.intensity === 2 && (
                    <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">
                      Moderate
                    </span>
                  )}
                  {drill.intensity === 3 && (
                    <span className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Intense
                    </span>
                  )}
                </div>
                <div>
                  {drill.difficulty === 1 && (
                    <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-700">
                      Beginner
                    </span>
                  )}
                  {drill.difficulty === 2 && (
                    <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">
                      intermediate
                    </span>
                  )}
                  {drill.difficulty === 3 && (
                    <span className="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Advanced
                    </span>
                  )}
                  {drill.difficulty === 4 && (
                    <span className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Expert
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {Array(variable_participants)
                  .fill(0)
                  .map((_, i) => {
                    return <ParticipantLogo extra key={i} />;
                  })}
                {Array(drill.participants_min)
                  .fill(0)
                  .map((_, i) => {
                    return <ParticipantLogo key={i} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      }
      {/*Backside*/}
      <div className="w-full h-full p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-gray-800">
        <div className="text-center text-slate-200 w-full">
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Description
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-left">
              {drill.explanation}
            </p>

            {drill.variations && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Variation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-left">
                  {drill.variations}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DrillOverview = () => {
  drills.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });

  const typeOfDrills = Object.keys(DrillCategory) as Array<
    keyof typeof DrillCategory
  >;

  return (
    <>
      {typeOfDrills.map((type) => {
        return (
          <div key={type} className="p-2">
            <div className="flex">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white p-2">
                {type}
              </h2>
              {/*Horizontal line*/}
              <div
                id="middleLine"
                className="flex-grow border-t my-auto ml-4 border-2"
              />
            </div>
            <div className="" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {drills
                .filter((drill) => drill.type === type)
                .map((drill) => {
                  return <DrillCard drill={drill} key={drill.name} />;
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DrillOverview;
