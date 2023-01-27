import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const taskName = () => {
        return (<div><img src="taskname.png" width="20" height="20" className="e-image"/>
        <b>Task Name</b></div>);
    };
    const startDate = () => {
        return (<div><img src="startdate.png" width="20" height="20" className="e-image"/>
        <b>Start Date</b></div>);
    };
    const duration = () => {
        return (<div><img src="duration.png" width="20" height="20" className="e-image"/>
        <b>Duration</b></div>);
    };
    const progress = () => {
        return (<div><img src="progress.png" width="20" height="20" className="e-image"/>
        <b>Progress</b></div>);
    };
    return <TreeGridComponent dataSource={sampleData} childMapping='subtasks' height='315'>
        <ColumnsDirective>
            <ColumnDirective field='taskName' width='220' headerTemplate={taskName}/>
            <ColumnDirective field='startDate' headerText='Start Date' format='yMd' type='date' textAlign='Right' headerTemplate={startDate}/>
            <ColumnDirective field='duration' textAlign='Right' headerTemplate={duration}/>
            <ColumnDirective field='progress' headerText='progress' textAlign='Right' headerTemplate={progress}/>
        </ColumnsDirective>
    </TreeGridComponent>;
}
;
export default App;
