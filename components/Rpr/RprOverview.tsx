import { useState } from "react";


export const RprOverview = () => {
    const [areTeamsReady, setTeamsReady] = useState(false);
    const handleSetupTeamClick = () => setTeamsReady(!areTeamsReady);

    const [firstPlayerName, setFirstPlayerName] = useState<string>('Player 1');
    const [secondPlayerName, setSecondPlayerName] = useState<string>('Player 2');
    const [thirdPlayerName, setThirdPlayerName] = useState<string>('Player 3');
    const [fourthPlayerName, setFourthPlayerName] = useState<string>('Player 4');

    const updateFirstPlayerName = (name: string): void => { name == null ? {} : setFirstPlayerName(name) }
    const updateSecondPlayerName = (name: string): void => { name == null ? {} : setSecondPlayerName(name) }
    const updateThirdPlayerName = (name: string): void => { name == null ? {} : setThirdPlayerName(name) }
    const updateFourthPlayerName = (name: string): void => { name == null ? {} : setFourthPlayerName(name) }


    return (
        <div >
            {(!areTeamsReady ?
                <RprTeamSetup
                    teamSetupFunction={handleSetupTeamClick}
                    returnFirstPlayerName={updateFirstPlayerName}
                    returnSecondPlayerName={updateSecondPlayerName}
                    returnThirdPlayerName={updateThirdPlayerName}
                    returnFourthPlayerName={updateFourthPlayerName} /> :

                <div className="">
                    <div className="flex">
                        <div className="w-3/4 px-4">
                            <ul className=" border-blue-500 border-double">
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                                <li className=" inline-block">C</li>
                            </ul>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex">
                                    <button className="mr-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-full">{firstPlayerName}</button>
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full">{secondPlayerName}</button>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-4 font-bold bg-blue-500 rounded-full px-4 py-2">18</div>
                                    <div className="font-bold bg-red-500 rounded-full px-4 py-2">19</div>
                                </div>
                                <div className="flex">
                                    <button className="mr-4 px-4 py-2 bg-red-500 text-white font-bold rounded-full">{thirdPlayerName}</button>
                                    <button className="px-4 py-2 bg-red-500 text-white font-bold rounded-full">{fourthPlayerName}</button>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Win point</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Lose point</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Ace</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Block</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Strong touch</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Weak touch</button>
                                <button className="w-1/7 px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Undo</button>
                            </div>
                        </div>
                        <div className="w-1/4 px-4">
                            <ul className=" list-disc ">
                                <li>List Item 1</li>
                                <li>List Item 2</li>
                                <li>List Item 3</li>
                                <li>List Item 4</li>
                                <button className="px-2 py-2 bg-slate-500 text-white font-bold rounded-full">Undo Last ball</button>
                            </ul>
                        </div>
                    </div>

                    <button onClick={handleSetupTeamClick}>
                        return to team setup
                    </button>
                </div>
            )}
        </div>
    )
};

interface RprTeamSetupProps {
    teamSetupFunction: Function,
    returnFirstPlayerName(name: string): void
    returnSecondPlayerName(name: string): void
    returnThirdPlayerName(name: string): void
    returnFourthPlayerName(name: string): void
}

const RprTeamSetup = (props: RprTeamSetupProps) => {
    return (
        <div>
            <form
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        first: { value: string };
                        second: { value: string };
                        third: { value: string };
                        fourth: { value: string };
                    };
                    props.returnFirstPlayerName(target.first.value);
                    props.returnSecondPlayerName(target.second.value);
                    props.returnThirdPlayerName(target.third.value);
                    props.returnFourthPlayerName(target.fourth.value);
                    props.teamSetupFunction();
                }}>
                <label>
                    Name of first player:
                    <input type="text" placeholder="name" name="first"></input>

                </label>
                <br />
                <label>
                    Name of second player:
                    <input type="text" placeholder="name" name="second"></input>

                </label>
                <br />
                <label>
                    Name of third player:
                    <input type="text" placeholder="name" name="third"></input>

                </label>
                <br />
                <label>
                    Name of fourth player:
                    <input type="text" placeholder="name" name="fourth"></input>

                </label>
                <input type="submit" />
            </form>
            <button onClick={() => props.teamSetupFunction()}>
                setup team
            </button>
        </div>
    )
}

export default RprOverview;