

import { ColumnDirective, ColumnsDirective,  Inject, TreeGridComponent  } from '@syncfusion/ej2-react-treegrid';
import { ColumnMenu, Filter,  FilterSettingsModel, Sort } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const filterSettings: FilterSettingsModel = { type:'Menu' };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='315' allowFiltering={true}
        allowSorting={true} showColumnMenu={true} filterSettings={filterSettings}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='120' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right' type='date' />
          <ColumnDirective field='duration' headerText='Duration' width='130' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Sort, Filter, ColumnMenu]}/>
    </TreeGridComponent>
};
export default App;


