import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const clickHandler = () => {
        if (treegrid) {
            treegrid.print();
        }
    };
    return (<div><ButtonComponent onClick={clickHandler}>Print</ButtonComponent>
    <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='265' ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Toolbar]}/>
    </TreeGridComponent></div>);
}
;
export default App;
