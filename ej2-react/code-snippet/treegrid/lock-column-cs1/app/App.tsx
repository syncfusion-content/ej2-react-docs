

import { ColumnDirective, ColumnsDirective, Inject, Reorder, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './custom.css';
import { sampleData } from './datasource';

function App() {
    const customAttributes: any = {class: 'customcss'};
    return <TreeGridComponent dataSource={sampleData} allowReordering={true} allowSelection={false}
    treeColumnIndex={1} childMapping='subtasks' height='315'>
    <Inject services={[Reorder]}/>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='110' format='yMd' textAlign='Right' type='date' />
          <ColumnDirective field='duration' headerText='Duration' width='110' lockColumn= {true} textAlign='Right' customAttributes={customAttributes} />
          <ColumnDirective field='progress' headerText='Progress' width='180'/>
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


