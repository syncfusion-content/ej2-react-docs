import { getObject } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
export default class App extends React.Component {
    rowDataBound(args) {
        if (getObject('taskID', args.data) === 3) {
            args.rowHeight = 90;
        }
    }
    render() {
        this.rowDataBound = this.rowDataBound.bind(this);
        return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='275' rowDataBound={this.rowDataBound}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
              <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
              <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
              <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            </ColumnsDirective>
        </TreeGridComponent>;
    }
}
