import * as React from 'react';
import { sampleData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, Page } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const pageOptions = { pageSizes: ["5", "10", "All"] };
    return (<TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageOptions} height={273}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='taskName' headerText='Task Name' width='200'></ColumnDirective>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='endDate' headerText='End Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
          <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
          <ColumnDirective field='priority' headerText='Priority' width='90'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]}/>
      </TreeGridComponent>);
}
;
export default App;
