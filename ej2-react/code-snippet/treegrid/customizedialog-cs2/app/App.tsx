


import * as React from 'react';
import { projectData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel, Page } from '@syncfusion/ej2-react-treegrid';
import { DialogEditEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];

  const actionBegin = (args: DialogEditEventArgs): void => {
    if (args.requestType === 'beginEdit') {
      if (getValue('Priority', args.rowData as object) === "Breaker") {
        args.cancel = true;
      }
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' height={265}
       editSettings={editOptions} actionBegin={actionBegin} toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
      </TreeGridComponent>
    );
};
export default App;


