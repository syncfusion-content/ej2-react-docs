import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeGridComponent, RowDD, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './datasource';
class Source extends React.Component {
    data = sampleData;
    rowDropSettings = { targetID: 'DestGrid' };
    selectionSettings = { type: 'Multiple' };
    style = { marginBottom: '20px' };
    render() {
        return <TreeGridComponent id='TreeGrid' dataSource={sampleData} treeColumnIndex={1} allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings} selectionSettings={this.selectionSettings} childMapping='subtasks' height='275'>
                <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='180'></ColumnDirective>
              <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
              <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            </ColumnsDirective>
            <Inject services={[RowDD]}/>
          </TreeGridComponent >;
    }
}
class Target extends React.Component {
    data = [];
    rowDropSettings = { targetID: 'TreeGrid' };
    selectionSettings = { type: 'Multiple' };
    render() {
        return <TreeGridComponent treeColumnIndex={1} id='DestGrid' allowRowDragAndDrop={true} rowDropSettings={this.rowDropSettings} selectionSettings={this.selectionSettings} childMapping='subtasks' height='275'>
        <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='taskName' headerText='Task Name' width='180'></ColumnDirective>
        <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
        <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
      </ColumnsDirective>
      <Inject services={[RowDD]}/>
</TreeGridComponent>;
    }
}
   
function App() {
    return <div>
            <Source></Source>
            <Target></Target>
           </div>;
}
ReactDOM.render(<App />, document.getElementById('treegrid'));
