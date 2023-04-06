import { Drill } from "../../data/localization";
import { useState } from "react";
import { ParticipantLogo } from "../Logos";
import { DrillIntensity } from "./DrillIntensity";
import { DrillDifficulty } from "./DrillDifficulty";

export const DrillCard = ({ drill }: { drill: Drill }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);

  const variable_participants = drill.participants_max - drill.participants_min;

  return (
    <div
      className={
        "group cursor-pointer transform-gpu min-h-[13rem] transition-all duration-500 [transform-style:preserve-3d] border border-gray-200 rounded-lg shadow-xl dark:border-gray-700 " +
        (isFlipped ? " [transform:rotateY(180deg)]" : "")
      }
      onClick={handleClick}
    >
      {/*Frontside*/}
      {
        <div className="absolute p-6 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col h-full">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {drill.name}
            </h5>
            <p className="flex-grow mb-3 font-normal text-gray-500 dark:text-gray-400">
              {drill.purpose}
            </p>
            <div className="flex justify-between ">
              <div className="">
                <div className="py-2">{<DrillIntensity drill={drill} />}</div>
                <div>
                  <DrillDifficulty drill={drill} />
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
      <div className="w-full h-full p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-lg">
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
