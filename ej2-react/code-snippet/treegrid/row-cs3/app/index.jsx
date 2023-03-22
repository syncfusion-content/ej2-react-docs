import * as React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, RowDD } from '@syncfusion/ej2-react-treegrid';
import { sampleData } from './datasource';
class App extends React.Component {
    rowDrop(args) {
        if (args.dropPosition == 'middleSegment') {
            args.cancel = true;
            this.treegridInstance.reorderRows([args.fromIndex], args.dropIndex, 'above');
        }
        render();
        {
            return <TreeGridComponent ref={(treegrid) => (this.treegridInstance = treegrid)} allowRowDragAndDrop={true} dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' rowDrop={this.rowDrop.bind(this)}>
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
}
ReactDOM.render(<App />, document.getElementById('treegrid'));