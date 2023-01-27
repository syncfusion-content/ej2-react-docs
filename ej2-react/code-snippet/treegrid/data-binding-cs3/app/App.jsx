import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { projectData } from './datasource';
function App() {
    const pageOptions = { pageSize: 7 };
    return <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
          <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right'/>
      </ColumnsDirective>
      <Inject services={[Page]}/>
  </TreeGridComponent>;
}
;
export default App;
