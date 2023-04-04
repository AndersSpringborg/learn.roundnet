import {Drill, drills} from "../../data/localization";
import {useState} from "react";

const ParticipantLogo = ({extra = false}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="30px"
        width="30px"
        viewBox="0 0 489.3 489.3"
        className={"-m-2 "+ (extra ? "animate-pulse dark:fill-white fill:slate-300" : "fill-green-600")}
    >
        <g>
            <path
                d="M181.95,62.7c0,34.6,28.1,62.7,62.7,62.7s62.7-28.1,62.7-62.7S279.25,0,244.65,0S181.95,28.1,181.95,62.7z M244.65,24.5    c21.1,0,38.2,17.1,38.2,38.2s-17.1,38.2-38.2,38.2s-38.2-17.1-38.2-38.2S223.55,24.5,244.65,24.5z"/>
            <path
                d="M196.25,138.5c-34.3,0-62.2,27.9-62.2,62.2v79.7c0,23,12.9,44,32.8,54.7v104.7c0,27.3,22.2,49.5,49.5,49.5h56.6    c27.3,0,49.5-22.2,49.5-49.5V335c19.9-10.7,32.8-31.7,32.8-54.7v-79.7c0-34.3-27.9-62.2-62.2-62.2h-96.8V138.5z M330.75,200.6    v79.7c0,15.7-9.9,29.9-24.7,35.3c-4.8,1.8-8,6.4-8,11.5v112.6c0,13.8-11.2,25-25,25h-56.6c-13.8,0-25-11.2-25-25V327.2    c0-5.1-3.2-9.7-8-11.5c-14.8-5.4-24.7-19.6-24.7-35.3v-79.8c0-20.8,16.9-37.7,37.7-37.7h96.8    C313.85,163,330.75,179.9,330.75,200.6z"/>
        </g>
    </svg>
)
const DrillCard = ({drill}: { drill: Drill }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const link = "/drills/";
    const handleClick = () => setIsFlipped(!isFlipped);

    const variable_participants = drill.participants_max - drill.participants_min;

    return (
        <div className="group cursor-pointer">
            <div
                className={"w-full h-full transform-gpu relative transition-all duration-500 [transform-style:preserve-3d] bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700" + (isFlipped ? " [transform:rotateY(180deg)]" : "")}
                onClick={handleClick}>
                {/*Frontside*/}
                {<div className={"absolute p-6 w-full h-full [backface-visibility:hidden]"}>
                    <div className="flex flex-col h-full">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {drill.name}
                            </h5>
                        </a>
                        <p className="flex-grow mb-3 font-normal text-gray-500 dark:text-gray-400">{drill.purpose}</p>
                        <div className="flex justify-between ">
                            <div className="">
                                <div className="py-2">
                                    {drill.intensity === 1 && <span
                                        className="px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full dark:text-green-100 dark:bg-green-700">Mild</span>}
                                    {drill.intensity === 2 && <span
                                        className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">Moderate</span>}
                                    {drill.intensity === 3 && <span
                                        className="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full dark:text-red-100 dark:bg-red-700">Intense</span>}
                                </div>
                                <div>
                                    {drill.difficulty === 1 && <span
                                        className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-700">Beginner</span>}
                                    {drill.difficulty === 2 && <span
                                        className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-700">intermediate</span>}
                                    {drill.difficulty === 3 && <span
                                        className="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full dark:text-red-100 dark:bg-red-700">Advanced</span>}
                                    {drill.difficulty === 4 && <span
                                        className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">Expert</span>}
                                </div>
                            </div>
                            <div className="flex items-center">
                                {Array(variable_participants).fill(0).map((_, i) => {
                                    return <ParticipantLogo extra key={i}/>
                                })
                                }
                                {Array(drill.participants_min).fill(0).map((_, i) => {
                                    return <ParticipantLogo key={i}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
                {/*Backside*/}
                <div className="w-full h-full p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="text-center text-slate-200 w-full">
                        <div className="flex flex-col h-full justify-center">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">What is this drill
                                about?</h2>
                            <p className="text-gray-600 dark:text-gray-400">{drill.explanation}</p>
                            <div className="flex justify-center">
                                <a href={link}
                                   className="mt-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DrillOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {drills.map((drill) => {
            return (
                <DrillCard drill={drill}/>
            )
        })
        }
    </div>
);

export default DrillOverview