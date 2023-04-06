import { Drill } from "../../data/localization";
import { RoundedSpan } from "../RoundedSpan";

export function DrillDifficulty({ drill }: { drill: Drill }) {
  const drillDifficultyToColor = (difficulty: Drill["difficulty"]) => {
    switch (difficulty) {
      case 1:
        return "text-green-700 bg-green-100 dark:text-green-100 dark:bg-green-700";
      case 2:
        return "text-yellow-700 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-700";
      case 3:
        return "text-orange-700 bg-orange-100 dark:text-orange-100 dark:bg-orange-700";
      case 4:
        return "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700";
    }
  };
  const drillDifficultyToText = (difficulty: Drill["difficulty"]) => {
    switch (difficulty) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";
      case 4:
        return "Expert";
    }
  };

  return (
    <RoundedSpan className={drillDifficultyToColor(drill.difficulty)}>
      {drillDifficultyToText(drill.difficulty)}
    </RoundedSpan>
  );
}
