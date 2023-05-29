import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const toolbarOptions = ['Print'];
    const toolbarClick = (args) => {
        if (treegrid && args.item.text === 'Print') {
            const cols = treegrid.grid.columns;
            for (const col of cols) {
                if (col.field === "duration") {
                    col.visible = true;
                }
                else if (col.field === "startDate") {
                    col.visible = false;
                }
            }
        }
    };
    const printComplete = (args) => {
        if (treegrid) {
            const cols = treegrid.grid.columns;
            for (const col of cols) {
                if (col.field === "duration") {
                    col.visible = false;
                }
                else if (col.field === "StartDate") {
                    col.visible = true;
                }
            }
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='265' toolbar={toolbarOptions} toolbarClick={toolbarClick} ref={g => treegrid = g} printComplete={printComplete}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' visible={false}/>
        </ColumnsDirective>
        <Inject services={[Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
