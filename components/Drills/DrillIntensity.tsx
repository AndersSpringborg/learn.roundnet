import {Drill} from "../../data/localization";
import {RoundedSpan} from "../RoundedSpan";

export function DrillIntensity({drill}: { drill: Drill }) {
    const drillIntensityToColor = (intensity: (Drill['intensity'])) => {
        switch (intensity) {
            case 1:
                return "text-green-700 bg-green-100 dark:text-green-100 dark:bg-green-700";
            case 2:
                return "text-yellow-700 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-700";
            case 3:
                return "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700";
        }
    }

    const drillIntensityToText = (intensity: (Drill['intensity'])) => {
        switch (intensity) {
            case 1:
                return "Mild";
            case 2:
                return "Moderate";
            case 3:
                return "Intense";
        }
    }

    const colorClasses = drillIntensityToColor(drill.intensity);
    const text = drillIntensityToText(drill.intensity);

    return <RoundedSpan className={colorClasses}>
        {text}
    </RoundedSpan>;
}