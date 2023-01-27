


import * as React from 'react';
import { projectData } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { IEditCell } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let treegridObj: TreeGridComponent | null;
  let priorityElem: HTMLElement;
  let priorityObj: DropDownList;
  let durationElem: HTMLElement;
  let durationObj: DropDownList;

  const priority: IEditCell = {
    create:()=>{
      priorityElem = document.createElement('input');
      return priorityElem;
    },
    destroy:()=>{
      priorityObj.destroy();
    },
    read:()=>{
      return priorityObj.text;
    },
    write:()=>{
      priorityObj = new DropDownList({
        change: () => {
          durationObj.enabled = true;
          const tempQuery: Query = new Query().where('priorityId', 'equal', priorityObj.value);
          durationObj.query = tempQuery;
          durationObj.text = '';
          durationObj.dataBind();
        },
        dataSource: new DataManager(priorityData),
        fields: { value: 'priorityId', text: 'priorityName' },
        floatLabelType: 'Never',
        placeholder: 'Select a Priority'
      });
      priorityObj.appendTo(priorityElem);
    }
  }

  const duration: IEditCell = {
    create:()=>{
      durationElem = document.createElement('input');
      return durationElem;
    },
    destroy:()=>{
      durationObj.destroy();
    },
    read:()=>{
      return durationObj.text;
    },
    write:()=>{
      durationObj = new DropDownList({
        dataSource: new DataManager(durationData),
        enabled: false,
        fields: { value: 'durationId', text: 'durationValue' },
        floatLabelType: 'Never',
        placeholder: 'Select a duration'
      });
      durationObj.appendTo(durationElem);
    }
  }

  const priorityData: object[] = [
    { priorityName: 'Normal', priorityId: '1' },
    { priorityName: 'High', priorityId: '2' }
  ];
  const durationData: object[] = [
    { durationValue: 2, priorityId: '1', durationId: 2 },
    { durationValue: 3, priorityId: '1', durationId: 3 },
    { durationValue: 4, priorityId: '1', durationId: 4 },
    { durationValue: 11, priorityId: '2', durationId: 11 },
    { durationValue: 15, priorityId: '2', durationId: 15 },
    { durationValue: 20, priorityId: '2', durationId: 20 }
  ];

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' editSettings={editOptions} toolbar={toolbarOptions}
      ref={g => treegridObj = g} height={273}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' edit={priority} />
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' edit={duration} />
          <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
      </TreeGridComponent>
    );
};
export default App;



