import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        newRowPosition: 'Below'
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' type='date' editType='datepickeredit'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit]}/>
    </TreeGridComponent>;
}
;
export default App;
