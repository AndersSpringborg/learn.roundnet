import {Drill} from "../../data/localization";
import {useState} from "react";
import {ParticipantLogo} from "../Logos";

export const DrillCard = ({drill}: { drill: Drill }) => {
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
                                <div className="py-2">
                                    {drill.intensity === 1 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full dark:text-green-100 dark:bg-green-700">
                      Mild
                    </span>
                                    )}
                                    {drill.intensity === 2 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">
                      Moderate
                    </span>
                                    )}
                                    {drill.intensity === 3 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Intense
                    </span>
                                    )}
                                </div>
                                <div>
                                    {drill.difficulty === 1 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-700">
                      Beginner
                    </span>
                                    )}
                                    {drill.difficulty === 2 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">
                      intermediate
                    </span>
                                    )}
                                    {drill.difficulty === 3 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Advanced
                    </span>
                                    )}
                                    {drill.difficulty === 4 && (
                                        <span
                                            className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                      Expert
                    </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center">
                                {Array(variable_participants)
                                    .fill(0)
                                    .map((_, i) => {
                                        return <ParticipantLogo extra key={i}/>;
                                    })}
                                {Array(drill.participants_min)
                                    .fill(0)
                                    .map((_, i) => {
                                        return <ParticipantLogo key={i}/>;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/*Backside*/}
            <div
                className="w-full h-full p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-lg">
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
