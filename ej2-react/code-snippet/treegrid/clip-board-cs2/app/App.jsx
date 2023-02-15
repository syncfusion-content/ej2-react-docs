import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const settings = { type: 'Multiple', mode: 'Row' };
    const copy = () => {
        if (treegrid) {
            treegrid.copy();
        }
    };
    const copyHeader = () => {
        if (treegrid) {
            treegrid.copy(true);
        }
    };
    return (<div>
        <ButtonComponent onClick={copy}>Copy</ButtonComponent>
        <ButtonComponent onClick={copyHeader}>CopyHeader</ButtonComponent>
        <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' ref={g => treegrid = g} allowPaging={true} selectionSettings={settings}>
            <ColumnsDirective>
                <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
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
