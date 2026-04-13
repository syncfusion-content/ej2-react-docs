


import { DataManager } from '@syncfusion/ej2-data';
import { FailureEventArgs } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

function App() {
    let treegrid: TreeGridComponent | null;
    const data = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    const onActionFailure = (e: FailureEventArgs) => {
        const span: HTMLElement = document.createElement('span');
        if (treegrid) {
            (treegrid.element.parentNode as HTMLElement)
                .insertBefore(span, treegrid.element);
            span.style.color = "#FF0000";
            span.innerHTML = "Server exception: 404 Not found";
        }
    }
        return <TreeGridComponent dataSource={data} ref={g => treegrid = g} hasChildMapping='isParent' treeColumnIndex={1} idMapping='TaskID' parentIdMapping='ParentItem' height='260' actionFailure={onActionFailure}>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
                <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
                <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
            </ColumnsDirective>
        </TreeGridComponent>
};
export default App;


