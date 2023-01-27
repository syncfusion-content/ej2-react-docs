import { closest } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { CommandColumn, Edit } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowDeleting: true };
    const commands = [
        {
            buttonOption: {
                content: 'Details', cssClass: 'e-flat'
            }
        }
    ];
    let treegrid;
    const onClick = (args) => {
        if (treegrid) {
            const rowObj = treegrid.getRowObjectFromUID(closest(args.target, '.e-row')
                .getAttribute('data-uid'));
            const rowData = rowObj.data;
            alert(JSON.stringify(rowData));
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            <ColumnDirective headerText='Commands' width='120' commands={commands}/>
        </ColumnsDirective>
        <Inject services={[Edit, CommandColumn]}/>
    </TreeGridComponent>;
}
;
export default App;
