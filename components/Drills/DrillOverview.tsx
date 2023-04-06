import { DrillCategory, drills } from "../../data/localization";
import { DrillCard } from "./DrillCard";

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
