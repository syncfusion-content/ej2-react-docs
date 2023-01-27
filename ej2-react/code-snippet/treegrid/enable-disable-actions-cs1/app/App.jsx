import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Page, Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
/* tslint:disable */
function App() {
    const editOptions = { allowAdding: true, allowEditing: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    let treegrid;
    const btnClick = () => {
        alert('dwgfgfg');
    };
    return (<div>
      <ButtonComponent cssClass='e-flat e-primary' iconCss='e-icons e-play-icon' isToggle onClick={btnClick}>Enable/Disable TreeGrid</ButtonComponent>
      <div id="TreeGridParent">
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={210} toolbar={toolbarOptions} ref={g => treegrid = g} editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]}/>
      </TreeGridComponent>
      </div>
    </div>);
}
;
export default App;
