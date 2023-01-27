import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Page } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const show = () => {
        if (treegrid) {
            treegrid.showColumns(['Task ID', 'Duration']); // show by HeaderText
        }
    };
    const hide = () => {
        if (treegrid) {
            treegrid.hideColumns(['Task ID', 'Duration']); // hide by HeaderText
        }
    };
    return (<div>
    <ButtonComponent cssClass='e-flat' onClick={show}>Show</ButtonComponent>
    <ButtonComponent cssClass='e-flat' onClick={hide}>Hide</ButtonComponent><TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>
    </div>);
}
;
export default App;
