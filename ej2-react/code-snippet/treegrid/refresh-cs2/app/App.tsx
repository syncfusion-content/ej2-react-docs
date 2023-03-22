


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Page, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-treegrid';

/* tslint:disable */

function App() {

  let treegridObj: TreeGridComponent | null;
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const load = (): void => {
    treegridObj = document.getElementById('treegridObj').ej2_instances[0];
    let instance:any = treegridObj;
    if(instance != null)
    {
      instance.element.addEventListener('mousedown', function (e) {
        if ((e.target).closest('td') != null &&
        (e.target).closest('td').classList.contains("e-rowcell") &&
        !(e.target).classList.contains("e-treegridexpand") &&
        !(e.target).classList.contains("e-treegridcollapse")) {
          if (instance.grid.isEdit &&
          !(e.target).closest('.e-row').classList.contains('e-editedrow') &&
          !(e.target).closest('.e-row').classList.contains('e-addedrow')) {
            instance.endEdit(); // calling endEdit method
            }
          if(!instance.grid.isEdit) {
            let index = parseInt((e.target).closest('td').getAttribute('Index'));
            instance.selectRow(index);
            instance.startEdit(); // calling startEdit method
            let colIndex = parseInt((e.target).closest('td').getAttribute("aria-colIndex"));
            setTimeout(function(){ 
              (document.getElementsByClassName('e-input')[colIndex] as any).focus();
            });
            }
        };
      });
    }
  }
    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' height={210}
      allowPaging={true} toolbar={toolbarOptions} editSettings={editSettings} load={load}
      id="treegridObj">
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='120'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]} />
      </TreeGridComponent>
    );
};

export default App;


