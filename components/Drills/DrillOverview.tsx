 import {Drill, drills} from "../../data/localization";

// cards of all drills
const ReadMoreButton = ({link}: { link: string }) => {
    return (
        <a href={link}
           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
            </svg>
        </a>)
}

const ParticipantLogo = ({extra = false}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={extra ? "#8ad245" : "#374151"}
        height="30px"
        width="30px"
        viewBox="0 0 489.3 489.3"
        className="-m-2"
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
    const [isFlipped, setIsFlipped] = React.useState(true);
    const cardText = drill.purpose;
    const link = "/drills/" + drill.name;

    const variable_participants = drill.participants_max - drill.participants_min;

    // return (
    //     <div className="group h-96 w-80 [perspective:1000px]">
    //         <div
    //             className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    //             <div className="absolute inset-0">
    //                 <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
    //                      src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
    //                      alt=""/>
    //             </div>
    //             <div
    //                 className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
    //                 <div className="flex min-h-full flex-col items-center justify-center">
    //                     <h1 className="text-3xl font-bold">Jane Doe</h1>
    //                     <p className="text-lg">Photographer & Art</p>
    //                     <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    //                     <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read
    //                         More
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    // </div>)
    return (
        <div
            className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 flex flex-col">
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


    )
}

function DrillOverview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {drills.map((drill) => {
                return (
                    <DrillCard drill={drill}/>
                )
            })
            }
        </div>
    )
}

export default DrillOverview