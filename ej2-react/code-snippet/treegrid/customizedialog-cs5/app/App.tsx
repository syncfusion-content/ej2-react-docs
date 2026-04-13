


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Column, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { DialogEditEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let treegridObj: TreeGridComponent | null;

  const actionBegin = (args: DialogEditEventArgs): void => {
    if (treegridObj && (args.requestType === 'beginEdit' || args.requestType === 'add')) {
      const cols: Column[] = treegridObj.columns as Column[];
      for (const col of cols) {
        if (col.field === "Progress") {
          col.visible = true;
        }
        else if (col.field === "Priority") {
          col.visible = false;
        }
      }
    }
  }
  const actionComplete = (args: DialogEditEventArgs): void => {
    if (treegridObj && args.requestType === 'save') {
      const cols: Column[] = treegridObj.columns as Column[];
      for (const col of cols) {
        if (col.field === "Progress") {
          col.visible = false;
        }
        else if (col.field === "Priority") {
          col.visible = true;
        }
      }
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' actionComplete={actionComplete} editSettings={editOptions} toolbar={toolbarOptions}
      actionBegin={actionBegin} ref={g => treegridObj = g}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' visible={false} />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
      </TreeGridComponent>
    );
};
export default App;



