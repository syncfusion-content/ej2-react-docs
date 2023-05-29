import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const customAttributes = { class: 'customcss' };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={320}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100' customAttributes={customAttributes}></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
        </ColumnsDirective>
      </TreeGridComponent>);
}
;
export default App;
