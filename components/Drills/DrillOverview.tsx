import {drills as drillsData} from "../../data/localization";
import {useState} from "react";


const DrillOverview = () => {
    const [drills, setDrills] = useState(drillsData);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <table className={"table-normal w-full"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Level</th>
                    <th>Duration</th>
                    <th>Players</th>
                    <th>Equipment</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                {drills.map((drill, index) => (<>
                    <tr key={index}>
                        <td>
                            <div className="font-bold">{drill.name}</div>
                        </td>
                        <td>
                            <div className="font-bold">{drill.type}</div>
                        </td>
                        <td>
                            <div className="font-bold">{drill.equipment}</div>
                        </td>
                    </tr>
                    </>))}
                </tbody>
            </table>
        </div>


    );
}

export default DrillOverview;