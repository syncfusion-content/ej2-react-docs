

import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Page, SelectionSettingsModel, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const settings: SelectionSettingsModel = { type: 'Multiple' };

    const rowSelected = () => {
        if (treegrid) {
            /** Get the selected row indexes */
            const selectedrowindex: number[] = treegrid.getSelectedRowIndexes();
            /** Get the selected records. */
            const selectedrecords: object[] = treegrid.getSelectedRecords();
            alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
    selectionSettings={settings} height={270} rowSelected={rowSelected} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='150'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>
};
export default App;


