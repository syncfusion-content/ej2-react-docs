


import * as React from 'react';
import { projectData } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel, Page } from '@syncfusion/ej2-react-treegrid';
import { IEditCell } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];

  const priorityData: object[] = [
    { priorityName: 'Normal', priorityId: '1' },
    { priorityName: 'High', priorityId: '2' },
    { priorityName: 'Low', priorityId: '3' },
    { priorityName: 'Critical', priorityId: '4' },
    { priorityName: 'Breaker', priorityId: '5' }
  ];

  const priority: IEditCell = {
    params:   {
      actionComplete: () => false,
      allowFiltering: true,
      dataSource: new DataManager(priorityData),
      fields: { text: "priorityName", value: "priorityName"},
      query: new Query()
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID'
       editSettings={editOptions} toolbar={toolbarOptions} height={265}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Priority' headerText='Priority' width='90' editType= 'dropdownedit' textAlign='Right' edit={priority} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
      </TreeGridComponent>
    );
};
export default App;



