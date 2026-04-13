import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, RowDD } from '@syncfusion/ej2-react-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const Indenting = () => {
        treegrid.indent(treegrid.current.getCurrentViewRecords()[2]);
    };
    const Outdenting = () => {
        treegrid.outdent(treegrid.current.getCurrentViewRecords()[2]);
    };
    return (<div>
    <ButtonComponent onClick={Indenting}>
        Indent
    </ButtonComponent>
    <ButtonComponent onClick={Outdenting}>
        Outdent
    </ButtonComponent>
    <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' selectedRowIndex={2} height='270' ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='priority' headerText='Priority' width='90'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[RowDD]}/>
    </TreeGridComponent>
    </div>);
}
;
export default App;
