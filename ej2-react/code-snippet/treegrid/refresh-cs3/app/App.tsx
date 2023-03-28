


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Page, Toolbar, ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-react-treegrid';

/* tslint:disable */

function App() {

  let treegridObj: TreeGridComponent | null;
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const load = (): void => {
    treegridObj = document.getElementById('treegridObj').ej2_instances[0];

    let instance:any = treegridObj;
    if(instance != null)
    {
      instance.element.addEventListener('mousedown', function (e) {
        if (e.target.closest('td') !== null && e.target.closest('td').classList.contains("e-rowcell")
        && !e.target.classList.contains('e-treegridexpand') && !e.target.classList.contains('e-treegridcollapse') && e.target.closest('td').getAttribute("aria-colIndex") !== null) {
          let target = e.target.closest('td');
          if (instance.grid.isEdit && !target.classList.contains("e-editedbatchcell") && !document.getElementsByClassName('e-addedrow').length) {
            instance.grid.saveCell(); // calling saveCell method
          }
          if(!instance.grid.isEdit) {
            let index = parseInt(target.getAttribute("Index"));
            let colindex = parseInt(target.getAttribute("aria-colindex"));
            let field = instance.getColumns()[colindex - 1].field;
            setTimeout(function(){
              instance.editCell(index, field); // calling editCell method
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


