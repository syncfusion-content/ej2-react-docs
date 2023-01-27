


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, extendArray } from '@syncfusion/ej2-react-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

/* tslint:disable */

function App() {
    let treegridObj: TreeGridComponent | null;
    const treegridData: object[] = projectData;
    const add = () => {
      const dataSource: object = extendArray(treegridObj.dataSource as object[]);
      (dataSource as object[]).unshift({ TaskID: 99, TaskName: "New Data", StartDate: new Date('02/03/2017'), Duration: 10 });
      treegridObj.dataSource = dataSource;
    }
    const delete = () => {
        const selectedRow: number = treegridObj.getSelectedRowIndexes()[0];
        const dataSource: object = extendArray(treegridObj.dataSource as object[]);
        if (selectedRow.length > 0){
          (dataSource as object[]).splice(selectedRow, 1); // Delete record.
        }
        else {
            alert("No records selected for delete operation");
        }
        treegridObj.dataSource = dataSource; // Refresh the TreeGrid.
    }
    return (<div>
      <ButtonComponent cssClass= 'e-flat' isToggle onClick={ add }>Add</ButtonComponent>
      <ButtonComponent cssClass= 'e-flat' isToggle onClick= { delete} >Delete</ButtonComponent>
      <TreeGridComponent dataSource={treegridData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' height={280} ref={g=> treegridObj = g}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
            <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' />
            <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
        </ColumnsDirective>
      </TreeGridComponent>
    </div>  
    );
};
export default App;



