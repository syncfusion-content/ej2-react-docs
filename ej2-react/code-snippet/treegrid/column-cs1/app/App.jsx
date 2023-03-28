import { ColumnDirective, ColumnsDirective, Inject, Resize, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const dataBound = () => {
        if (treegrid) {
            treegrid.autoFitColumns(['taskName']);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='315' allowResizing={true} dataBound={dataBound} ref={g => treegrid = g}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
              <ColumnDirective field='taskName' headerText='Task Name' width='60'/>
              <ColumnDirective field='startDate' headerText='Start Date' width='120' format='yMd' textAlign='Right' type='date'/>
              <ColumnDirective field='duration' headerText='Duration' width='120' textAlign='Right'/>
              <ColumnDirective field='progress' headerText='Progress' width='120' textAlign='Right'/>
            </ColumnsDirective>
            <Inject services={[Resize]}/>
        </TreeGridComponent>;
}
;
export default App;
