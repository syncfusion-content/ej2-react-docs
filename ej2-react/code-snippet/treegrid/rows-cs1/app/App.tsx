

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

export default class App extends React.Component<{}, {}>{
    public render() {
        return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
         height='275' rowHeight='60'>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
              <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
              <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
              <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
            </ColumnsDirective>
        </TreeGridComponent>
    }
}


