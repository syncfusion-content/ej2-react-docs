import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, ColumnMenu, Inject } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    return (<div>
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' showColumnMenu={true} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[ColumnMenu]}/>
      </TreeGridComponent>
      </div>);
}
;
export default App;
