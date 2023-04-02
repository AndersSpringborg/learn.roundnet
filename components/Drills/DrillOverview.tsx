import DataTable, { TableColumn } from 'react-data-table-component';
import {Drill, drills} from "../../data/localization";
const columns: TableColumn<Drill>[] = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Category',
        selector: row => row.type,
    },
    {
        name: 'Equipment',
        selector: row => row.equipment,
    }
];


const DrillOverview = () => {
    return <DataTable columns={columns} data={drills}/>
}

export default DrillOverview