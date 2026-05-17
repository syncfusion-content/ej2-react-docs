

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-grids';
import './App.css';

// Defines the data to be displayed in the TreeGrid.
const data: object[] = [
    { 
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    },
];

function App() {
    return <div>
        {/* Assigns the dataset to the TreeGrid component */}
        <TreeGridComponent dataSource={data} treeColumnIndex={1} childMapping='subtasks'>
            {/* Define the columns to be displayed */}
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Right' width='150'/>
                <ColumnDirective field='TaskName' headerText='Task Name' width='170'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' />
                <ColumnDirective field='EndDate' headerText='End Date' width='130' format='yMd' textAlign='Right' />
                <ColumnDirective field='Duration' headerText='Duration' width='100' textAlign='Right' />
            </ColumnsDirective>
        </TreeGridComponent>
    </div>
}
export default App;


