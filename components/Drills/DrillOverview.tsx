import { Drill, DrillCategory, Drills } from "../../data/localization";
import { DrillCard } from "./DrillCard";
import React, { useState } from "react";
type FiltersOverview = {
  participants: number | null;
  category: Drill["type"] | null;
  difficulty: Drill["difficulty"] | null;
};

type Filter = {
  options: { value: string; label: string }[];
  title: string;
  whenSelected: (
    value: string,
    setFilter: React.Dispatch<React.SetStateAction<FiltersOverview>>
  ) => void;
};

const filters: Filter[] = [
  {
    title: "Participants",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
    ],
    whenSelected: (value, setFilter) => {
      if (value === "") {
        setFilter((f) => {
          return { ...f, participants: null };
        });
      } else {
        setFilter((f) => {
          return { ...f, participants: parseInt(value) };
        });
      }
    },
  },
  {
    title: "Difficulty",
    options: [
      { value: "1", label: "Beginner" },
      { value: "2", label: "Intermediate" },
      { value: "3", label: "Advanced" },
      { value: "4", label: "Expert" },
    ],
    whenSelected: (value, setFilter) => {
      if (value === "") {
        setFilter((f) => {
          return { ...f, difficulty: null };
        });
      } else {
        setFilter((f) => {
          return { ...f, difficulty: parseInt(value) };
        });
      }
    },
  },

  {
    title: "Category",
    options: [
      { value: DrillCategory.SERVING, label: "Serving" },
      { value: DrillCategory.HITTING, label: "Hitting" },
      { value: DrillCategory.SETTING, label: "Setting" },
      { value: DrillCategory.RECEIVING, label: "Receiving" },
      { value: DrillCategory.DEFENCE, label: "Defence" },
      { value: DrillCategory.GAMEPLAY, label: "Gameplay" },
    ],
    whenSelected: (value, setFilter) => {
      if (value === "") {
        setFilter((f) => {
          return { ...f, category: null };
        });
      } else {
        const category = value as Drill["type"];
        setFilter((f) => {
          return { ...f, category: category };
        });
      }
    },
  },
];
export const DrillOverview = () => {
  const [drills] = useState(Drills);
  const [filter, setFilter] = useState<FiltersOverview>({
    participants: null,
    category: null,
    difficulty: null,
  });
  drills.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
  const participantsFilter = (d) =>
    filter.participants === null ||
    (d.participants_min <= filter.participants &&
      d.participants_max >= filter.participants);
  const categoryFilter = (d) =>
    filter.category === null || d.type === filter.category;
  const difficultyFilter = (d) =>
    filter.difficulty === null || d.difficulty === filter.difficulty;

  const filteredDrills = drills.filter(
    (d) => participantsFilter(d) && categoryFilter(d) && difficultyFilter(d)
  );

  return (
    <>
      <div className="grid gap-4 grid-cols-3 p-2">
        {filters.map((f) => (
          <Selector
            title={f.title}
            options={f.options}
            whenSelected={(v) => f.whenSelected(v, setFilter)}
          />
        ))}
      </div>
      <DrillCardsOverview drills={filteredDrills} />
    </>
  );
};

const Selector = ({
  title,
  options,
  whenSelected,
}: {
  title: string;
  options: { value: string; label: string }[];
  whenSelected: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col">
      <select
        className="bg-white dark:bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => whenSelected(e.target.value)}
      >
        <option selected value="">
          {title}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const DrillCardsOverview = ({ drills }: { drills: Drill[] }) => {
  const drillCategories = Object.keys(DrillCategory) as Array<
    keyof typeof DrillCategory
  >;

  if (!drills) {
    return <div>loading...</div>;
  }

  return (
    <>
      {drillCategories.map((type) => {
        const filteredDrills = drills.filter((drill) => drill.type === type);
        return <DrillCategoryView drillList={filteredDrills} title={type} />;
      })}
    </>
  );
};

const DrillCategoryView = ({
  drillList,
  title,
}: {
  drillList: Drill[];
  title: string;
}) => {
  if (drillList.length === 0) {
    return null;
  }

  return (
    <div key={title} className="p-2">
      <div className="flex">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white p-2">
          {title}
        </h2>
        {/*Horizontal line*/}
        <div
          id="middleLine"
          className="flex-grow border-t my-auto ml-4 border-2"
        />
      </div>
      <div className="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {drillList.map((drill) => {
          return <DrillCard drill={drill} key={drill.name} />;
        })}
      </div>
    </div>
  );
};

export default DrillOverview;
