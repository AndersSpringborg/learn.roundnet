import { useState } from "react";


export const RprOverview = () => {
    const [areTeamsReady, setTeamsReady] = useState(false);
    const handleSetupTeamClick = () => setTeamsReady(!areTeamsReady);

    if (!areTeamsReady){
        return <RprTeamSetup handleSetupTeamClick={handleSetupTeamClick}/>
    }
    return (
        <h1>
            hi                    
        </h1>
    )
};

const RprTeamSetup = (handleSetupTeamClick) => {

    return (
        <button onClick={handleSetupTeamClick}>
            setup team
        </button>
    )

}

export default RprOverview;