import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';
function App() {
    let treegrid;
    let numeric;
    const onChange = () => {
        if (treegrid && numeric) {
            treegrid.selectRow(parseInt(numeric.getText(), 10));
        }
    };
    const rowSelected = (args) => {
        if (treegrid) {
            const rowHeight = treegrid.getRows()[treegrid.getSelectedRowIndexes()[0]].scrollHeight;
            treegrid.getContent().children[0].scrollTop = rowHeight * treegrid.getSelectedRowIndexes()[0];
        }
    };
    return (<div>
        <NumericTextBoxComponent format={'N'} placeholder={'Enter index to select a row'} width={200} showSpinButton={false} min={0} change={onChange} ref={numeric}/>
            <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' width='100%' rowSelected={rowSelected} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='160'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
    </TreeGridComponent></div>);
}
;
export default App;
