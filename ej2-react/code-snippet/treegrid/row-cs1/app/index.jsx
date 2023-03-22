import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, RowDD } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './datasource';
class App extends React.Component {
    selectionSettings = { type: 'Multiple' };
    render() {
        return <TreeGridComponent dataSource={sampleData} allowRowDragAndDrop={true} treeColumnIndex={1} childMapping='subtasks' height='270' selectionSettings={this.selectionSettings}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='180'></ColumnDirective>
              <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
              <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
            </ColumnsDirective>
            <Inject services={[RowDD]}/>
        </TreeGridComponent>;
    }
}
ReactDOM.render(<App />, document.getElementById('treegrid'));
